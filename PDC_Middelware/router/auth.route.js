const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.createNewUser);

router.get('/fetchCurrentUser', authController.fetchCurrentUser);

router.post('/verifyPhoneOtp', authController.verifyPhoneOtp);

router.post('/registerViaEmail', authController.registerViaEmail);

router.post('/checkIfExists', authController.checkIfExists);

router.post('/emailLogin', authController.emailLogin);

module.exports = router;
