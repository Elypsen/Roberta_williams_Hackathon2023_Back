const express = require("express");
const router = express.Router();

const { createAdmin, connectAdmin } = require("../controllers/adminController");

router.post('/signup', createAdmin);
router.post('/login', connectAdmin)


module.exports= router;
