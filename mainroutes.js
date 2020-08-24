const express = require('express');
const router = express.Router();
const userRoutes = require('./src/routes/user');
const petRoutes = require('./src/routes/pet');
const medicationRoutes = require('./src/routes/medication');
router.use('/users',userRoutes);
router.use('/pets',petRoutes);
router.use('/medications',medicationRoutes)
module.exports = router;