const express = require("express");
const router = express.Router();
const {getAllFestival, getFestivalByDpt, getFestivalByNom} = require('../controllers/festivalController')

router.get('/', getAllFestival);
router.get('/dpt', getFestivalByDpt)
router.get('/nom', getFestivalByNom)

module.exports= router;
