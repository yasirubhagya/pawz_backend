const express = require('express');
const petRouter = express.Router();
const petController = require('../controllers/petController');
//api/pets/
petRouter.get('/get/',petController.addNewUser);
petRouter.get('/get/:PID',petController.addNewUser);
petRouter.post('/addpet',petController.addNewUser);
petRouter.post('/editpet',petController.addNewUser);
petRouter.delete('/deletepet',petController.addNewUser);
module.exports = petRouter;