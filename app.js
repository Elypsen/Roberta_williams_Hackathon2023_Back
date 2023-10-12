const express = require('express');
const connectDB = require("./config/bd");
require("dotenv").config();

var cors = require('cors');
const bodyParser = require('body-parser');
// connexion à la DB
connectDB();

const app = express();
const Router= require('./routes/Router')
const adminRouter= require('./routes/adminRouter')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const swaggerUi = require('swagger-ui-express');
// const swaggerAutogen = require('swagger-autogen');
// const outputFile = './swagger_output.json'
//  swaggerAutogen(outputFile, ['./app.js'])//
// const swaggerDocument = require('./swagger_output.json');
// app.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use("/", Router)
app.use("/admin", adminRouter)

app.listen(8000, () => {
    console.log(`Le serveur est en écoute sur le port 8000`);
});

