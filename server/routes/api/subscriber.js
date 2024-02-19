const express = require('express');
require('dotenv').config();
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Subscriber = require('../../models/Subscriber');


router.post(
  '/',
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {   

      const {email} = req.body;
      
      const subscriber = await Subscriber.findOne({email: email});
      
      if(subscriber){
          return res
              .status(400)
              .json({ errors: { msg: 'Subscriber already exist' } });
      }
      else {
          const currentDate = new Date();
          const newsubscriber = new Subscriber({
              email: email,
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