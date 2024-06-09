const express = require("express");
const { signup, login, logout,sendOtp,verifyOtp} = require("../controllers/UserAuthController");


const UserAuthRouter = express.Router();

UserAuthRouter.post('/signup', signup);
UserAuthRouter.post('/login', login);
UserAuthRouter.post('/logout', logout);
UserAuthRouter.post('/send-otp', sendOtp); 
UserAuthRouter.post('/verify-otp', verifyOtp);

module.exports = UserAuthRouter;


