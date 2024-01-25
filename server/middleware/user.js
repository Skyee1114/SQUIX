const jwt = require('jsonwebtoken');
const config = require('config');
require('dotenv').config();

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');
  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    jwt.verify(token, process.env.jwtSecret, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.email = decoded.email;
        next();
      }
    });
  } catch (err) {
    console.error('Something is wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};