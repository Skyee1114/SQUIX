const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  personalInfo: [
    {
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      firstname: {
        type: String,       
      },
      lastname: {
        type: String,
      },
      phone: {
        type: String,
      },
    }
  ],
  connectedSocials: [
    {
      twitter: {
        type: String,
      },
      instagram: {
        type: String,
      },
      telegram: {
        type: String,
      },
      artstation: {
        type: String,
      },
      tiktok: {
        type: String,
      },
      discord: {
        type: String,
      },
      facebook: {
        type: String,
      },          
      reddit: {
        type: String,
      },          
      googleAccount: {
        type: String,
      },          
      linkedIn: {
        type: String,
      },          
      youtube: {
        type: String,
      },
    },
  ],
  avatar: {
    type: String,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
