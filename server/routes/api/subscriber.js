const express = require('express');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config();
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Subscriber = require('../../models/Subscriber');

// @route    POST api/profile
// @desc     update profile
// @access   Public
router.post(
  '/',
  auth, 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {      
        const user = await User.findById(req.user.id);
        const subscriber = await Subscriber.findOne({email: user.email});
        if(subscriber){
            return res
                .status(400)
                .json({ errors: { msg: 'Subscriber already exist' } });
        }
        else {
            const currentDate = new Date();
            const newsubscriber = new Subscriber({
                name: user.name,
                email: user.email,
                subscriber: req.body.email,
                date: currentDate,
            })
            await newsubscriber.save();
            return res
                .status(200)
                .json({ success: { msg: 'Subscriber registered' } });
        }

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;