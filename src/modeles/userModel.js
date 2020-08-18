const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstName: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    lastName:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    email: {
        type:mongoose.SchemaTypes.String,
        required: true
    },
    passwordHash:{
        type:mongoose.SchemaTypes.String,
        required:true
    }
});

module.exports = mongoose.model('user',userSchema);