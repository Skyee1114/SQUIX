import axios from 'axios';

// Get All User
export const getUsers = async () => {
  try {        
      const res = await axios.get('http://156.227.0.154:5000/api/admin/users/');  
      return res.data;
  } catch (err) {
    // dispatch({ type: CLEAR_PROFIlE });
    
  }
};

// Delete Selected User
export const deleteUsers = async ({selectedUsers}) => {
  try {        
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    };
    const res = await axios.delete(`http://156.227.0.154:5000/api/admin/deleteuser/${selectedUsers}`, config);  
    
    return res.data;
  } catch (err) {
    // dispatch({ type: CLEAR_PROFIlE });
    
  }
};

// get Current News
export const getNewsList = async () => {
  try {
    
    const res = await axios.get('http://156.227.0.154:5000/api/admin/newslist/');   
    return res.data;
  } catch (err) {
  }
};

// get Current News
export const getNews = async ({id}) => {
  try {
    const config = {
      headers: {
      'Content-Type': 'application/json',
      },
    };    
    const res = await axios.post('http://156.227.0.154:5000/api/admin/news/', {id}, config);  
    return res.data;
  } catch (err) {
    
  }
};

export const getNewsImage = async ({id}) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'blob' // Set the response type as Blob
    };
    const res = await axios.post('http://156.227.0.154:5000/api/admin/newsimage', {id}, config);  
    return res.data;
  } catch (err) {
    console.error(err);
  }
};


// add News
export const saveNews = async ({news}) => {
  try {
    const config = {
      headers: {
      'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('http://156.227.0.154:5000/api/admin/savenews', { news }, config);  
    return res.data;
  } catch (err) {
    
  }
};

export const saveNewsImage = async (formData) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    };
    console.log('formData:', formData);
    const res = await axios.post('http://156.227.0.154:5000/api/admin/savenewsimage', formData, config);  
    return res.data;
  } catch (err) {
    
  }
};

// Delete Selected User
export const deleteNews = async ({selectedNews}) => {
  try {        
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    };
    const res = await axios.delete(`http://156.227.0.154:5000/api/admin/deletenews/${selectedNews}`, config);  
    return res.data;
  } catch (err) {
    
  }
};

// Send to subscribers
export const sendtoSubscribers = async ({id}) => {
  try {
    const config = {
      headers: {
      'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('http://156.227.0.154:5000/api/admin/subscribers', { id }, config);  
    return res.data;
  } catch (err) {
    
  }
};

// add Jobs
export const saveJobs = async ({jobs}) => {
  try {
    const config = {
      headers: {
      'Content-Type': 'application/json',
      },
    };
    console.log(jobs);
    const res = await axios.post('http://156.227.0.154:5000/api/admin/savejobs', { jobs }, config);  
    return res.data;
  } catch (err) {
    
  }
};

// Delete Selected User
export const deleteJobs = async ({selectedJobs}) => {
  try {        
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    };
    const res = await axios.delete(`http://156.227.0.154:5000/api/admin/deletejobs/${selectedJobs}`, config);  
    return res.data;
  } catch (err) {
    
  }
};

// get Current News
export const getJobsList = async () => {
  try {
    
    const res = await axios.get('http://156.227.0.154:5000/api/admin/jobslist/');   
    return res.data;
  } catch (err) {
  }
};



