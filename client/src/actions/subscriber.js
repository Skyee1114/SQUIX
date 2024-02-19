import axios from 'axios';

// update Current User Profile
export const addSubscriber = async ({email}) => {
  try {
    const config = {
      headers: {
      'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('http://156.227.0.154:5000/api/subscriber/', { email }, config);  
    return res.data;
  } catch (err) {
    // dispatch({ type: CLEAR_PROFIlE });
    
  }
};
