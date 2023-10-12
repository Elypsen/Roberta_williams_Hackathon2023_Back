const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Connecté à la base de données MongoDB!");
        })
        .catch((err) => {
            console.error("Erreur de connexion à la base de données MongoDB:", err);
            throw err;
        });
};


module.exports = connectDB;