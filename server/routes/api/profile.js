const express = require('express');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config();
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const avatarUpload = require('../../middleware/upload');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route    GET api/profile
// @desc     Get profile by token
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user.id}).select('-password');
    // console.log(user);
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile avatar
// @desc     Get profile avatar by token
// @access   Private
router.get('/avatar', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user.id}).select('avatar');
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Send the avatar file to the frontend
    const avatarPath = profile.avatar;
    console.log(avatarPath);
    if (avatarPath) {
      const avatarFilePath = path.join(__dirname, '..', '..', avatarPath); // Construct the full file path
      res.sendFile(avatarFilePath); // Send the file to the client
    } else {
      res.status(404).json({ message: 'Avatar not found for the user' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile
// @desc     update profile
// @access   Public
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required field').not().isEmpty(),
      check('email', 'Email is required field').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findById(req.user.id).select('-password');
      let profile = await Profile.findOne({ user: req.user.id });

      if (!profile) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Profile does not exist' }] });
      }

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Profile does not exist' }] });
      }

      const { name, email, password, firstname, lastname, phone, twitterlink, artstationlink, facebooklink, linkedinlink, instagramlink, tiktoklink, redditlink, youtubelink, telegramlink, discordlink, googleaccountlink } = req.body;

      user.name = name;
      user.email = email;
      if(password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
      }
      await user.save();
        
      profile.personalInfo[0].username = name;
      profile.personalInfo[0].email = email;
      profile.personalInfo[0].firstname = firstname;
      profile.personalInfo[0].lastname = lastname;
      profile.personalInfo[0].phone = phone;
      profile.connectedSocials[0].twitter = twitterlink;
      profile.connectedSocials[0].instagram = instagramlink;
      profile.connectedSocials[0].telegram = telegramlink;
      profile.connectedSocials[0].artstation = artstationlink;
      profile.connectedSocials[0].tiktok = tiktoklink;
      profile.connectedSocials[0].discord = discordlink;
      profile.connectedSocials[0].facebook = facebooklink;
      profile.connectedSocials[0].reddit = redditlink;
      profile.connectedSocials[0].googleAccount = googleaccountlink;
      profile.connectedSocials[0].linkedIn = linkedinlink;
      profile.connectedSocials[0].youtube = youtubelink;
      await profile.save();

      return res
          .status(200)
          .json({ success: [{ msg: 'Profile updated' }] });

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    POST api/profile
// @desc     update profile
// @access   Public
router.post(
  '/avatar',
  auth,
  avatarUpload.single('avatar'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      if (!req.file) {
        return res.status(400).json({ message: 'Please provide an avatar file' });
      }
  
      // Save the file path to the database or perform any necessary processing
      const filePath = 'uploads/avatars/' + req.file.filename;
  
      // Update the user's profile with the avatar file path
      let profile = await Profile.findOne({ user: req.user.id });
      profile.avatar = filePath;
      await profile.save();
  
      res.status(200).json({ message: 'Avatar uploaded successfully', filePath });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;