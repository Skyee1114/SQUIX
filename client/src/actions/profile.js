import axios from 'axios';

// Get Current User Profile
export const getCurrentProfile = async () => {
    try {
      const res = await axios.get('http://156.227.0.154:5000/api/profile/');  
      return res.data;
      // console.log(res);
    } catch (err) {
      // dispatch({ type: CLEAR_PROFIlE });
      
    }
};

// update Current User Profile
export const updateCurrentProfile = async ({name, email, password, firstname, lastname, phone, twitterlink, artstationlink, facebooklink, linkedinlink, instagramlink, tiktoklink, redditlink, youtubelink, telegramlink, discordlink, googleaccountlink}) => {
  try {
    const config = {
      headers: {
      'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('http://156.227.0.154:5000/api/profile/', { name, email, password, firstname, lastname, phone, twitterlink, artstationlink, facebooklink, linkedinlink, instagramlink, tiktoklink, redditlink, youtubelink, telegramlink, discordlink, googleaccountlink }, config);  
    return res.data;
    // console.log(res);
  } catch (err) {
    // dispatch({ type: CLEAR_PROFIlE });
    
  }
};

// Get Current User Avatar
export const getCurrentAvatar = async () => {
  try {
    const res = await axios.get('http://156.227.0.154:5000/api/profile/avatar', { responseType: 'blob' });  
    return res.data;
    // console.log(res);
  } catch (err) {
    // dispatch({ type: CLEAR_PROFIlE });
    
  }
};

// update Current User Avatar
export const updateCurrentAvatar = async (formData) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    };
    const res = await axios.post('http://156.227.0.154:5000/api/profile/avatar', formData, config);  
    return res.data;
    // console.log(res);
  } catch (err) {
    // dispatch({ type: CLEAR_PROFIlE });
    
  }
};

