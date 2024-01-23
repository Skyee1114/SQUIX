const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
    '/',    
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //Retrieve the info from post request
        const { email, password } = req.body;
        
        try {
            //Check in the DB whether user already exists or not
            let user = await User.findOne({ email });

            if (!user) {
                return res
                .status(400)
                .json({ errors: [{ msg: `User doesn't exist` }] });
            }

            if (user.isverified === true) {
                return res
                .status(400)
                .json({ errors: [{ msg: `User already verified` }] });
            }

            const verificationToken = jwt.sign({ email: email }, config.get('jwtSecret'), { expiresIn: '1 day' });

            const transporter = nodemailer.createTransport({
                service: "Gmail",
                host: 'smtp.gmail.com',
                port: 465,
                auth: {
                  user: config.get('gmailUser'),
                  pass: config.get('gmailPwd')
                }
            });
          
            // Construct the verification email
            const mailOptions = {
                from: config.get('gmailUser'),
                to: email,
                subject: 'Email Verification',
                text: `Please click on the following link to verify your email: ${config.get('domain')}/verify/${verificationToken}`
            };

            // Send the verification email
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                console.error(error);
                return res.status(500).send('Failed to send verification email');
                }
                // Email sent successfully
                return res.status(200).json({ msg: 'Verification email sent successfully' });
            });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
