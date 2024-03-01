import axios from 'axios';

// Get All User
export const getUsers = async () => {
  try {        
      const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/admin/users/`);  
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
    const res = await axios.delete(`${process.env.REACT_APP_DOMAIN}/api/admin/deleteuser/${selectedUsers}`, config);  
    
    return res.data;
  } catch (err) {
    // dispatch({ type: CLEAR_PROFIlE });
    
  }
};

// get Current News
export const getNewsList = async () => {
  try {
    
    const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/admin/newslist/`);   
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
    console.log(id);  
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/admin/news/`, {id}, config);  
    return res.data;
  } catch (err) {
    
  }
};

export const getNewsCoverImage = async ({id}) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'blob' // Set the response type as Blob
    };
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/admin/newscoverimage`, {id}, config);  
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
    console.log(news);
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/admin/savenews`, { news }, config);  
    return res.data;
  } catch (err) {
    
  }
};

export const saveNewsCoverImage = async (formData) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    };
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/admin/savenewscoverimage`, formData, config);  
    return res.data;
  } catch (err) {
    
  }
};

export const saveNewsContentsImage = async (formData) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    };
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/admin/savenewscontentsimage`, formData, config);  
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
    const res = await axios.delete(`${process.env.REACT_APP_DOMAIN}/api/admin/deletenews/${selectedNews}`, config);  
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
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/admin/subscribers`, { id }, config);  
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
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/admin/savejobs`, { jobs }, config);  
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
    const res = await axios.delete(`${process.env.REACT_APP_DOMAIN}/api/admin/deletejobs/${selectedJobs}`, config);  
    return res.data;
  } catch (err) {
    
  }
};

// get Current Jobs
export const getJobs = async ({id}) => {
  try {
    const config = {
      headers: {
      'Content-Type': 'application/json',
      },
    };  
    console.log(id);  
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/admin/jobs/`, {id}, config);  
    return res.data;
  } catch (err) {
    
  }
};

// get Jobs list
export const getJobsList = async () => {
  try {
    
    const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/admin/jobslist/`);   
    return res.data;
  } catch (err) {
  }
};

// get Subscribers list
export const getSubscribersList = async () => {
  try {
    
    const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/subscriber/subscriberslist/`);   
    return res.data;
  } catch (err) {
  }
};

// Delete Selected Subscribers
export const deleteSubscribers = async ({selectedSubscribers}) => {
  try {        
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    };
    const res = await axios.delete(`${process.env.REACT_APP_DOMAIN}/api/subscriber/deletesubscriber/${selectedSubscribers}`, config);  
    
    return res.data;
  } catch (err) {
    // dispatch({ type: CLEAR_PROFIlE });
    
  }
};



