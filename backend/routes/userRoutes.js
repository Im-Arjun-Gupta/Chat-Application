const express = require("express");
const router = express.Router();
const { registerUser } = require('../controllers/userControllers');

router.route('/').post(registerUser); // used for chaining multiple methods to the same route
// router.post('/login', authUser);

module.exports = router;