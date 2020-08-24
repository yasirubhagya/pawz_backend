const express = require('express');
const medicationRouter = express.Router();
const medicationController = require('../controllers/medicationController');
//api/pets/
medicationRouter.get('/getmedlistbypetid/:PID',medicationController.getmedicationsBypetId);
medicationRouter.post('/addmedication/',medicationController.addMedication);
medicationRouter.delete('/removemedication/:MID',medicationController.removemedication);
module.exports = medicationRouter; 