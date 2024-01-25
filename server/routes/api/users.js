const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { check, validationResult } = require('express-validator');
const user = require('../../middleware/user');
const User = require('../../models/User');

// @route    POST api/users
// @desc     Verify user email
// @access   Public
router.post(
  '/', 
  user,
  async (req, res) => {
   
    try {
      
      const user = await User.findOne({ email: req.email });

      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }

      // Update user's verification status in the database
      if (user.isverified === true) {
        return res.status(400).json({ msg: 'Email verification link expired'});
      }
      else {
        await User.findOneAndUpdate({ email: req.email }, { $set: { isverified: true } });
      }      
      
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
