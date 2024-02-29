const express = require('express');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config();
const nodemailer = require('nodemailer');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const newsImageUpload = require('../../middleware/newsimageupload');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Donate = require('../../models/Donate');
const News = require('../../models/News');
const Jobs = require('../../models/Job');
const Subscriber = require('../../models/Subscriber')

// @route    GET api/admin/users
// @desc     Get users by token
// @access   Private
router.get('/users', auth, async (req, res) => {
    try {
        // const profile = await Profile.find();
        const users = await User.find().select('-password');

        res.json(users); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/deleteuser/:selectedUsers', auth, async (req, res) => {
    try {
        
        const deleteusers = req.params.selectedUsers.split(',');

        await Profile.deleteMany({ user: { $in: deleteusers }});
        await User.deleteMany({ _id: { $in: deleteusers } });        
        const users = await User.find().select('-password');

        res.json(users);
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/newslist', async (req, res) => {
    try {
        const news = await News.find().select('-image');   

        res.json(news);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/news', async (req, res) => {
    try {
        const { id } = req.body; 
        const news = await News.findOne({id: id}).select('-image');   
        console.log(news)
        res.json(news);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/newscoverimage', async (req, res) => {
    try {
        const {id} = req.body;
        const news = await News.findOne({id: id}).select('image');
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
    
        // Send the image file to the frontend
        const newsImagePath = news.image;
        if (newsImagePath) {
            const newsImageFilePath = path.join(__dirname, '..', '..', newsImagePath); // Construct the full file path
            res.sendFile(newsImageFilePath); // Send the file to the client
        } else {
            res.status(404).json({ message: 'Image not found for the news' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/savenews', auth, async (req, res) => {
    
    try {
        const { news } = req.body;
        // Set the date field of each news object to the current date
        console.log(news);
        const currentDate = new Date();
        let savednews = null;
        if(news._id) {
            const existnews=  await News.findById(news._id).select('-image');
            existnews.titles = news.titles;
            existnews.summary = news.summary;
            existnews.contents = news.contents;
            existnews.tags = news.tags;
            existnews.date = currentDate;
            await existnews.save();
            savednews = await News.findById(news._id);
        }
        else {
            const newnews = new News({
                id: news.id,
                titles: news.titles,
                summary: news.summary,
                contents: news.contents,
                tags: news.tags,
                image: '',
                date: currentDate,
                subscription: false,
                }
            );
            await newnews.save();
            savednews = await News.findOne({id: news.id});              
        }

        // console.log(savednews);
        res.json(savednews);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post(
    '/savenewscoverimage',
    auth,
    newsImageUpload.single('image'),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        if (!req.file) {
          return res.status(400).json({ message: 'Please provide an image file' });
        }
    
        // Save the file path to the database or perform any necessary processing
        const filePath = 'uploads/news/' + req.file.filename;
    
        // Update the user's profile with the avatar file path
        let news = await News.findOne({ id: req.body.id });
        news.image = filePath;
        await news.save();  
    
        res.status(200).json({ message: 'News preview image uploaded successfully', filePath });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );

router.post(
    '/savenewscontentsimage',
    auth,
    newsImageUpload.single('image'),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        if (!req.file) {
          return res.status(400).json({ message: 'Please provide an image file' });
        }
    
        // Save the file path to the database or perform any necessary processing
        const filePath = 'http://156.227.0.154:5000/uploads/news/' + req.file.filename;
        
        res.status(200).json({ message: 'Avatar uploaded successfully', filePath });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );
  

router.delete('/deletenews/:selectedNews', auth, async (req, res) => {
    try {
        
        const deletenews = req.params.selectedNews.split(',');

        await News.deleteMany({ id: { $in: deletenews }});      
        const news = await News.find().select('-contents');

        res.json(news);
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/subscribers', auth, async (req, res) => {
    
    try {
        const { id } = req.body;
        let news = await News.findOne({ id: id });

        const subscribers = await Subscriber.find();

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
        subscribers.forEach(async subscriber => { 
            const mailOptions = {
                from: process.env.gmailUser,
                to: subscriber.email,
                subject: 'SQUIX News',
                html: `<div style="margin: 0px;">
                <div style="background-image:url('http://156.227.0.154:3000/img/newsteller/bg-newsteller.png'); background-repeat:no-repeat; background-position: top; width:100%;">
                    <div style=" max-width: 650px; margin-left: auto; margin-right: auto; position: relative; padding-bottom: 20px; border-top: 1px solid #000; border-left: 1px solid #000; border-right: 1px solid #000;">                              
                        <table style="width: 100%;">
                            <tbody>
                                <tr>
                                    <td style="padding-top: 20px; padding-left: 70px;">
                                        <img src="http://156.227.0.154:3000/img/newsteller/logo_newsteller.png" alt="">
                                        <div style="width: 247px; padding-top: 30px;">
                                            <p style="text-transform:uppercase; color:white; font-size: 38px; line-height: 45px; font-weight: bold; font-family: Tahoma;">
                                                this week with squix
                                            </p>
                                        </div>                    
                                    </td>                                
                                </tr>
                                <tr>
                                    <td style="padding-top: 100px; padding-left: 70px; padding-right: 70px;">
                                        <p style="font-weight: bold; font-family: Tahoma; font-size: 32px; line-height: 38px; color: black;">Hello!</p>
                                        <p style="font-weight: bold; font-family: Tahoma; font-size: 20px; line-height: 24px; color: black;">${news.titles.english}</p>
                                        <p style="font-family: Tahoma; font-size: 20px; line-height: 24px; color: black;">${news.summary.english}</p>
                                        <img src='http://156.227.0.154:5000/${news.image}' style="width: 500px;" alt="">
                                    </td>                        
                                </tr>    
                            </tbody>                                    
                        </table>       
                    </div>
                </div>
                <div style="background-image:url('http://156.227.0.154:3000/img/newsteller/bg-footer.png'); background-repeat:no-repeat; background-position: top; width:100%;">
                    <div style=" max-width: 650px; margin-left: auto; margin-right: auto; position: relative; padding-top: 50px; border-bottom: 1px solid #000; border-left: 1px solid #000; border-right: 1px solid #000;">
                        <table style="width: 100%;">
                            <tbody>
                                <tr style="display: flex; padding-left:100px; padding-right:100px;">
                                    <td style=" margin-left: auto; margin-right: auto;">
                                        <img src="http://156.227.0.154:3000/img/newsteller/twitter.png" alt="">
                                        <img src="http://156.227.0.154:3000/img/newsteller/redit.png" alt="">
                                        <img src="http://156.227.0.154:3000/img/newsteller/instagram.png" alt="">
                                        <img src="http://156.227.0.154:3000/img/newsteller/tiktok.png" alt="">
                                        <img src="http://156.227.0.154:3000/img/newsteller/artstation.png" alt="">
                                        <img src="http://156.227.0.154:3000/img/newsteller/youtube.png" alt="">
                                    </td>
                                </tr>
                                <tr style="display: flex; padding-top: 20px; padding-left: 70px; padding-right: 70px;">                       
                                    <td style="margin-right: auto;">
                                        <div>
                                            <img src="http://156.227.0.154:3000/img/newsteller/logo_footer.png" alt="">
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
    
            try {
                await transporter.sendMail(mailOptions);
                console.log(`Email sent to ${subscriber.email}`);
            } catch (error) {
                console.error(`Failed to send email to ${subscriber.email}: ${error}`);
            }
        })

        news.subscription = true;
        await news.save();

        res.status(200).json({ message: 'Send to subscribers successfully' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/savejobs', auth, async (req, res) => {    
    try {
        const { jobs } = req.body;

        // Update the date of all jobs to the current date
        const currentDate = new Date();

        jobs.date = currentDate;
        
        if (jobs._id) {
            // If the job has _id, update the existing record
            await Jobs.findByIdAndUpdate(jobs._id, jobs);
        } else {
            // If the job doesn't have _id, save as a new record
            const newJob = new Jobs(jobs);
            await newJob.save();
        }       

        const savedjobs = await Jobs.findOne({id: jobs.id});   
        res.json(savedjobs);      

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/deletejobs/:selectedJobs', auth, async (req, res) => {
    try {
        
        const deletejobs = req.params.selectedJobs.split(',');

        await Jobs.deleteMany({ id: { $in: deletejobs }});      
        const jobs = await Jobs.find()

        res.json(jobs);
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/jobs', async (req, res) => {
    try {
        const { id } = req.body; 
        const jobs = await Jobs.findOne({id: id});   
        console.log(jobs)
        res.json(jobs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/jobslist', async (req, res) => {
    try {
        const jobs = await Jobs.find();   

        res.json(jobs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;