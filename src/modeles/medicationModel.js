const mongoose = require('mongoose');
const medicationSchema = mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    pet:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    dose:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    type: {
        type:mongoose.SchemaTypes.String,
        required: true
    },
    givenDate:{
        type:mongoose.SchemaTypes.Date,
        required:true
    },
    nextDate:{
        type:mongoose.SchemaTypes.Date,
        required:true
    }
});

module.exports = mongoose.model('medication',medicationSchema);