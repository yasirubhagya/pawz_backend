const express = require('express');
const petRouter = express.Router();
const petController = require('../controllers/petController');
//api/pets/
petRouter.get('/get/',petController.getAllpets);
petRouter.get('/get/:PID',petController.addNewUser);
petRouter.post('/addpet',petController.addPet);
petRouter.post('/editpet',petController.addNewUser);
petRouter.delete('/removepet/:PID',petController.removePet);
module.exports = petRouter;