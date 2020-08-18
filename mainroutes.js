const express = require('express');
const router = express.Router();
const userRoutes = require('./src/routes/user');
const petRoutes = require('./src/routes/pet')
router.use('/users',userRoutes);
router.use('/pets',petRoutes)
module.exports = router;