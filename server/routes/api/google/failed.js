const express = require('express');
const router = express.Router();

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', (req, res) => {
    
    console.log('User is not authenticated');
    res.send("Failed")
})

module.exports = router;