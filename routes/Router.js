const express = require("express");
const router = express.Router();
const {getAllFestival, getFestivalByDpt} = require('../controllers/festivalController')

router.get('/', getAllFestival);
router.get('/dpt', getFestivalByDpt)

module.exports= router;
