const express = require('express');
const router = express.Router();

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Error while destroying session:', err);
        } else {
            req.logout(() => {
                console.log('You are logged out');
                res.redirect('/home');
            });
        }
    });
});

module.exports = router;