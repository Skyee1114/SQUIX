import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = async () => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');
        return res.data    
    } catch (err) {
        const errors = err.response.data.errors;    
        throw new Error(JSON.stringify(errors))
    }
}

// Validate User
export const verify = async ({ name, email, password }) => {
    try {
        const config = {
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const res = await axios.post('/api/validate', { name, email, password }, config); 

        if (res.status === 200) {
            // Save the name, email, and password into local storage
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);                
        }

        return res;
       
        console.log(res);
        // const token = res.data.token;
        // // Store the token in local storage
        // localStorage.setItem('token', token);
        // return await loadUser();
  
    } catch (err) {
        const errors = err.response.data.errors;   
        // throw new Error(JSON.stringify(errors))
    }
};

// Validate User
export const validate = async ({ name, email, password }) => {
    try {
        const config = {
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const res = await axios.post('/api/validate', { name, email, password }, config); 

        if (res.status === 200) {
            // Save the name, email, and password into local storage
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);                
        }

        return res;
       
        console.log(res);
        // const token = res.data.token;
        // // Store the token in local storage
        // localStorage.setItem('token', token);
        // return await loadUser();
  
    } catch (err) {
        const errors = err.response.data.errors;   
        // throw new Error(JSON.stringify(errors))
    }
};

//Login User
export const login = async ({email, password}) => {
    try {
        const config = {
            headers: {
            'Content-Type': 'application/json'
            },
        };
        const res = await axios.post('/api/auth', {email, password}, config);    
        console.log(res);      
    } catch (err) {
        const errors = err.response.data.errors;        
    }
  }
