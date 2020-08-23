const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
//api/users/
userRouter.get('/get/:UID',userController.getUserByUID);
userRouter.post('/signup',userController.signup);
userRouter.post('/signin',userController.signin);
module.exports = userRouter;