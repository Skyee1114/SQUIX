import axios from 'axios';

export const donate = async ({amount}) => {
  try {
    const config = {
      headers: {
      'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('http://156.227.0.154:5000/api/payment/', {amount}, config);  
    return res.data;
    // console.log(res);
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
    console.log(confirmed_amount);
    const res = await axios.post('http://156.227.0.154:5000/api/payment/updatelist', {confirmed_amount}, config);  
    return res.data;
    // console.log(res);
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
    const res = await axios.get('http://156.227.0.154:5000/api/payment/totalamount', config);  
    return res.data;
    // console.log(res);
  } catch (err) {
    const errors = err.response.data.errors;   
    console.log(errors);
    throw new Error(JSON.stringify(errors))
  }
};



