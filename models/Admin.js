const mongoose = require("mongoose");
const { Schema } = mongoose;
const adminSchema = Schema({
    username: {
        type: String,
        unique: true
    },
   

    password: String,
    

})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;