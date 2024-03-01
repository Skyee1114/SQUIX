import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = async () => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/auth`);
        return res.data    
    } catch (err) {
        const errors = err.response.data.errors;    
        throw new Error(JSON.stringify(errors))
    }
}

// Register User
export const register = async ({ name, email, password }) => {
    try {
        const config = {
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/register`, { name, email, password }, config); 

        if (res.status === 200) {
            // Save the name, email, and password into local storage
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);                
        }

        return res;
        
    } catch (err) {
        const errors = err.response.data.errors;   
        throw new Error(JSON.stringify(errors))
    }
};

// Get Verification Link
export const pleaseverify = async ({ name, email, password }) => {
    try {
        const config = {
            headers: {
            'Content-Type': 'application/json',
            },
        };

        const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/pleaseverify`, { name, email, password }, config); 
  
    } catch (err) {
        const errors = err.response.data.errors;   
        // throw new Error(JSON.stringify(errors))
    }
};

// Verify user
export const verifyuser = async (emailtoken ) => {
    if(emailtoken) {
        setAuthToken(emailtoken);
    }
    try {        
        const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/users`); 

        if(res.status === 200) {
            const token = res.data.token;
            // Store the token in local storage
            localStorage.clear();
            localStorage.setItem('token', token);
            return await loadUser();
        }
        
  
    } catch (err) {
        const errors = err.response.data.errors;   
        throw new Error(JSON.stringify(errors))
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
        const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/auth`, {email, password}, config);    
        const token = res.data.token;

        localStorage.clear();
        localStorage.setItem('token', token);
        return await loadUser();
    } catch (err) {
        const errors = err.response.data.errors;        
    }
}

  //Logout 
export const logout = () => {
    localStorage.removeItem('token');
};
  
//Google login
export const googleSign = async () => {
    try {
        const config = {
            headers: {
            'Content-Type': 'application/json'
            },
        };
        const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/google`, config);    
    } catch (err) {

    }
}