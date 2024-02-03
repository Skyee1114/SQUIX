const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
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

            const verificationToken = jwt.sign({ email: email }, process.env.jwtSecret, { expiresIn: '1 day' });

            const transporter = nodemailer.createTransport({
                service: "Gmail",
                host: 'smtp.gmail.com',
                port: 465,
                auth: {
                  user: process.env.gmailUser,
                  pass: process.env.gmailPwd
                }
            });
          
            // Construct the verification email
            const mailOptions = {
                from: process.env.gmailUser,
                to: email,
                subject: 'Email Verification',
                html: `<div style="margin: 0px;">
                <div style="background-image:url('http://156.227.0.154:3000/img/email/bg-email.png'); background-repeat:no-repeat; background-position: top; width:100%;">
                    <div style=" max-width: 650px; margin-left: auto; margin-right: auto; position: relative; padding-bottom: 20px;">                              
                        <table style="width: 100%;">
                            <tbody>
                                <tr style="display:flex;">
                                    <td style="padding-top: 70px; padding-left: 70px;">
                                        <img src="http://156.227.0.154:3000/img/email/logo_email.png" alt="">
                                        <div style="width: 247px; padding-top: 10px;">
                                            <p style="text-transform:uppercase; color:white; font-size: 38px; line-height: 45px; font-weight: bold; font-family: Tahoma;">
                                                welcome to <span style="color: #B80B4B;">squix</span> games!
                                            </p>
                                        </div>                    
                                    </td>
                                    <td style="margin-left: auto;">
                                        <img src="http://156.227.0.154:3000/img/email/dragon.png" alt="">
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-left: 70px; padding-right: 70px;">
                                        <p style="font-weight: bold; font-family: Tahoma; font-size: 32px; line-height: 38px; color: black;">Hello, ${user.name}!</p>
                                        <p style="font-family: Tahoma; font-size: 20px; line-height: 24px; color: black;">Congratulations and welcome to the SQUIX gaming community!</p>
                                        <p style="font-family: Tahoma; font-size: 16px; line-height: 19px; color: black;">We are thrilled to have you as part of our ever-growing family of passionate gamers. Your registration process has been successfully completed, and we're excited to embark on this gaming adventure together.</p>
                                        <a href="${process.env.domain}/verify/${verificationToken}" style="cursor: pointer;">
                                            <button style="background: linear-gradient(111.24deg, #FFAE00 -15.93%, #FF7A00 111.31%); border:0px; width: 100%; border-radius: 3px;"><p style="font-weight: bold; color: white; font-size:20px; line-height: 28px;">VERIFY YOUR EMAIL</p></button>
                                        </a>
                                        <p style="font-family: Tahoma; font-size: 16px; line-height: 19px; color: black;">As a registered member of SQUIX, you now have access to a plethora of exciting benefits and features, including:</p>
                                        <ul style="font-family: Tahoma; font-size: 16px; line-height: 19px; color: black;">
                                            <li>
                                                Early access to game updates and beta releases
                                            </li>
                                            <li>
                                                Exclusive in-game rewards and bonuses
                                            </li>
                                            <li>
                                                Access to member-only forums and discussions
                                            </li>
                                            <li>
                                                Participation in special gaming events and tournaments
                                            </li>
                                        </ul>
                                        <p style="font-family: Tahoma; font-size: 16px; line-height: 19px; color: black;">Once again, welcome to SQUIX, and thank you for choosing to be a part of our gaming universe.</p>
                                        <p style="font-weight: bold; font-family: Tahoma; font-size: 25px; line-height: 30px; text-align: center; color: black;">Get ready to dive into the action and let the games begin!</p>
                                    </td>                        
                                </tr>    
                            </tbody>                                    
                        </table>       
                    </div>
                </div>
                <div style="background-image:url('http://156.227.0.154:3000/img/email/bg-footer.png'); background-repeat:no-repeat; background-position: top; width:100%;">
                    <div style=" max-width: 650px; margin-left: auto; margin-right: auto; position: relative; padding-top: 50px;">
                        <table style="width: 100%;">
                            <tbody>
                                <tr style="display: flex; padding-left:100px; padding-right:100px;">
                                    <td style=" margin-left: auto; margin-right: auto;">
                                        <img src="http://156.227.0.154:3000/img/email/twitter.png" alt="">
                                        <img src="http://156.227.0.154:3000/img/email/redit.png" alt="">
                                        <img src="http://156.227.0.154:3000/img/email/instagram.png" alt="">
                                        <img src="http://156.227.0.154:3000/img/email/tiktok.png" alt="">
                                        <img src="http://156.227.0.154:3000/img/email/artstation.png" alt="">
                                        <img src="http://156.227.0.154:3000/img/email/youtube.png" alt="">
                                    </td>
                                </tr>
                                <tr style="display: flex; padding-top: 20px; padding-left: 70px; padding-right: 70px;">                       
                                    <td style="margin-right: auto;">
                                        <div>
                                            <img src="http://156.227.0.154:3000/img/email/logo_footer.png" alt="">
                                        </div>                            
                                        <div style="padding-top: 65px;">
                                            <p style="font-family: Tahoma; font-size: 10px; line-height: 14px; color: #ACACAC; width: 225px;">
                                                Copyrights © Squix Studios. All rights reserved. <br>All company names, brand names, trademarks and logos are the property of their respective owners.
                                            </p>
                                            <p style="font-family: Tahoma; font-size: 10px; line-height: 14px; color: #ACACAC;">
                                                Want to change how you receive these emails? Unsubscribe
                                            </p>
                                        </div>
                                    </td>
                                    <td style="text-align: right; margin-left: auto">
                                        <p style="font-weight: bold; font-family: Tahoma; font-size: 12px; line-height: 14px; color: white;">PRESSKIT</p>
                                        <p style="font-weight: bold; font-family: Tahoma; font-size: 12px; line-height: 14px; color: white;">CAREERS</p>
                                        <p style="font-weight: bold; font-family: Tahoma; font-size: 12px; line-height: 14px; color: white;">DONATIONS</p>
                                        <p style="font-weight: bold; font-family: Tahoma; font-size: 12px; line-height: 14px; color: white;">KICKSTATER</p>
                                        <p style="font-weight: bold; font-family: Tahoma; font-size: 12px; line-height: 14px; color: white;">CONTACTS</p>
                                        <p style="font-weight: bold; font-family: Tahoma; font-size: 12px; line-height: 14px; color: white;">FAN CONTENT POLICY</p>
                                        <p style="font-weight: bold; font-family: Tahoma; font-size: 12px; line-height: 14px; color: white;">PRIVACY POLICY</p>
                                    </td>                       
                                </tr>
                            </tbody>                    
                        </table>                    
                    </div>
                </div>
            </div>`,
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
