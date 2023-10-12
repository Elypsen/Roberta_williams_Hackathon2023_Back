const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type:String,
        default: "user",
    }

})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin; 