const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Profile = require('../../models/Profile');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  // check('name', 'Name is required').notEmpty(),
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Retrieve the info from post request
    const { name, email, password } = req.body;
    
    try {
      //Check in the DB whether user already exists or not
      let user = await User.findOne({ email });         

      if (user) { 
        if(user.isverified === true || user.googleId) {
          return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
        }      
        else {
          const isMatch = await bcrypt.compare(password, user.password);
          if(!isMatch){
            return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });            
          }
          else {
            return res
            .status(200)
            .json({ success: [{ msg: 'User registered' }] });
          }
        }
      }
      else {
        // Prepare user template to be stored in DB
        const currentDate = new Date();
        user = new User({
          name,
          email,      
          password,
          isverified: false,
          googleId: '',
          date: currentDate,
        });

        // Encrypt the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save the user registration details to DB
        await user.save();

        const profile = new Profile({
          user: user._id,
          personalInfo: {
            username: name,
            email: email,
            firstname: '',
            lastname: '',
            phone: '',
          },
          connectedSocials: {
            twitter: '',
            instagram: '',
            telegram: '',
            artstation: '',
            tiktok: '',
            discord: '',
            facebook: '',          
            reddit: '',          
            googleAccount: '',          
            linkedIn: '',          
            youtube: '',
          },
          avatar: '',
        })
        await profile.save();

        return res
          .status(200)
          .json({ success: [{ msg: 'User registered' }] });
      }
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
