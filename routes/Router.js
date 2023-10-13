const express = require("express");
const router = express.Router();
const {getAllFestival, getFestivalByDpt, getFestivalByName, createFestival, getOneFestival, updateFestival, getSampleFestival} = require('../controllers/festivalController')

router.get('/', getSampleFestival);
router.get('/all',getAllFestival)
router.get('/:id', getOneFestival);
router.post('/dpt', getFestivalByDpt)
router.post('/nom', getFestivalByName)

router.post('/', createFestival) 
router.put('/:id', updateFestival)

module.exports= router;
