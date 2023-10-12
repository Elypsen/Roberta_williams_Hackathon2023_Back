const express = require("express");
const router = express.Router();
const {getAllFestival, getFestivalByDpt, getFestivalByName, createFestival, getOneFestival, updateFestival} = require('../controllers/festivalController')

router.get('/', getAllFestival);
router.get('/:id', getOneFestival);
router.post('/dpt', getFestivalByDpt)
router.post('/nom', getFestivalByName)
router.post('/', createFestival)
router.put('/', updateFestival)

module.exports= router;
