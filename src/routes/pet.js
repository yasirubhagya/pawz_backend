const express = require('express');
const petRouter = express.Router();
const petController = require('../controllers/petController');
const checkAuth = require('../utilityfunctions/checkauth')
//api/pets/
petRouter.get('/get/',checkAuth,petController.getAllpets);
petRouter.get('/get/:PID',checkAuth,petController.getPetById);
petRouter.post('/addpet',checkAuth,petController.addPet);
petRouter.post('/editpet',checkAuth,petController.addNewUser);
petRouter.delete('/removepet/:PID',checkAuth,petController.removePet);
module.exports = petRouter; 