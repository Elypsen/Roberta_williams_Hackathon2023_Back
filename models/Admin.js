const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
   

    password: String,
    

})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;