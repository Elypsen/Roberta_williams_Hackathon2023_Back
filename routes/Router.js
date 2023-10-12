const express = require("express");
const router = express.Router();
const {getAllFestival} = require('../controller/festivalController')

router.get('/', getAllFestival);

module.exports= router;