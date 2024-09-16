const express = require("express");
const router = express.Router();
const { registerUser, authUser, allUsers } = require('../controllers/userControllers');
const { protect } = require("../middleware/authMiddleware");

router.route('/').post(registerUser).get(protect, allUsers); // used for chaining multiple methods to the same route
router.post('/login', authUser);

module.exports = router;