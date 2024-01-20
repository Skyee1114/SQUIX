const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
// const normalize = require('normalize-url');

const User = require('../../models/User');

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
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      else {
        return res
          .status(200)
          .json({ success: [{ msg: 'User validated' }] });
      }
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
