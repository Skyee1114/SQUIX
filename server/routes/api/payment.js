const express = require('express');
const router = express.Router();
require('dotenv').config();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Donate = require('../../models/Donate');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const stripe = require('stripe')(process.env.stripePrivateKey);

require('dotenv').config();

router.get(
    '/totalamount',
    async (req, res) => {        
        try {
            const totalAmount = await Donate.aggregate([
                {
                  $group: {
                    _id: null,
                    total: { $sum: "$amount" }
                  }
                }
            ]);
            
            if (totalAmount && totalAmount.length > 0) {
                res.json({ totalAmount: totalAmount[0].total });
            } else {
                res.json({ totalAmount: 0 });
            }
        } catch (err) { 
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

router.post(
    '/',
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            
            const { amount } = req.body;
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount * 100,
                currency: 'eur',
            });
            res.send({ clientSecret: paymentIntent.client_secret });
        } catch (err) { 
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

router.post(
    '/updatelist',
    auth,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try{
            console.log(req.user.id);            
            const amount = req.body.confirmed_amount/100;
            console.log(amount);
            const currentDate = new Date();

            const user = await User.findById(req.user.id);            

            const donate = new Donate({
                user: user._id,
                amount: amount,
                date: currentDate,
                name: user.name,
                email: user.email,                
            })
            await donate.save();

            const donators = await Donate.find({user: req.user.id});

            let totalSum = 0;

            donators.forEach((donator) => {
                totalSum += donator.amount;
            })

            const profile = await Profile.findOne({user: req.user.id}); 

            if(totalSum >= 25) {profile.membership = "Sproud"};
            if(totalSum >= 50) {profile.membership = "Original"};
            if(totalSum >= 80) {profile.membership = "Pioneer"};
            if(totalSum >= 150) {profile.membership = "Founder"};
            if(totalSum >= 250) {profile.membership = "Oldman"};
            if(totalSum >= 500) {profile.membership = "Royal"};
            if(totalSum >= 1000) {profile.membership = "Ultimate"};

            await profile.save();

            return res
              .status(200)
              .json({ success: [{ msg: 'Donate list updated' }] });
        }  catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
