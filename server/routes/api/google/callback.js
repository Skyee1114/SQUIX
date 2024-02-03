const express = require('express');
const router = express.Router();
const passport = require('passport');

require('./../../../middleware/passport');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', 
    passport.authenticate('google', {
        failureRedirect: '/api/google/failed',
    }),
    function (req, res) {
        res.redirect('/api/google/success')

    }
);

module.exports = router;