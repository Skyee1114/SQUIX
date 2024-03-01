import axios from 'axios';

export const donate = async ({amount}) => {
  try {
    const config = {
      headers: {
      'Content-Type': 'application/json',
      },
    };
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/payment/`, {amount}, config);  
    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;    
    throw new Error(JSON.stringify(errors))
  }
};


// update Current Donate list
export const updatedonatelist = async ({confirmed_amount}) => {
  try {
    const config = {
      headers: {
      'Content-Type': 'application/json',
      },
    };
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/payment/updatelist`, {confirmed_amount}, config);  
    return res.data;   
  } catch (err) {
    const errors = err.response.data.errors;   
    throw new Error(JSON.stringify(errors))
  }
};

// update Current Donate list
export const donatetotalamount = async () => {
  try {
    const config = {
      headers: {
      'Content-Type': 'application/json',
      },
    };
    const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/payment/totalamount`, config);  
    return res.data;
    
  } catch (err) {
    const errors = err.response.data.errors;   
    throw new Error(JSON.stringify(errors))
  }
};



