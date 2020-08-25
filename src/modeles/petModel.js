const mongoose = require('mongoose');
const petSchema = mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    breed:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    gender: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    dateofbirth:{
        type:mongoose.SchemaTypes.Date,
        required:true
    },
    isneutralized:{
        type:mongoose.SchemaTypes.Boolean,
        required:true
    }
});

module.exports = mongoose.model('pet',petSchema);