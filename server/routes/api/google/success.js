const express = require('express');
const router = express.Router();
const User = require('../../../models/User')
const Profile = require('../../../models/Profile')

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', isLoggedIn, async (req, res) => {
    try {
        let user = await User.findOne({email: req.user.email});
        const name = req.user.displayName;
        const email = req.user.email;
        const password = req.user.id;
        const isverified = req.user.verified;
        const googleId = req.user.id;
        console.log(name, email, password, isverified, googleId);
        if(!user) {                        
            
            user = new User({
                name,
                email,      
                password,
                isverified,
                googleId
            });
            await user.save();

            const profile = new Profile({
                personalInfo: [
                  {
                    username: name,
                    email: email,
                    firstname: '',
                    lastname: '',
                    phone: '',
                  }
                ],
                connectedSocials: [
                  {
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
                ],
              })
              await profile.save();
        } else {    
          if(user.googleId !== googleId){
            user.googleId = googleId;
            await user.save();
          }

            // if(!user.googleId){
            //     const googleId = req.user.id;            
            //     await User.findOneAndUpdate({ email: req.user.email }, { $set: { googleId: googleId } });
            // }
        }
       
        console.log('You are logged in');
        res.send(`Welcome ${req.user.displayName}`)

    } catch(err) {

    }    
})


module.exports = router;