const mongoose = require('mongoose');
const petSchema = mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    breed:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    height: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    weight:{
        type:mongoose.SchemaTypes.Number,
        required:true
    }
});

module.exports = mongoose.model('pet',petSchema);