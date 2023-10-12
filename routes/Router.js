const express = require("express");
const router = express.Router();
const {getAllFestival, getFestivalByDpt, getFestivalByName} = require('../controllers/festivalController')

router.get('/', getAllFestival);
router.get('/dpt', getFestivalByDpt)
router.get('/nom', getFestivalByName)

module.exports= router;
