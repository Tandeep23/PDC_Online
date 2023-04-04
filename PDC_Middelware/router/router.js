const router = require('express').Router();
router.use('/auth', require('./auth.route'));
//router.use('/api/v1' , require('./profile.route'));
module.exports = router;
