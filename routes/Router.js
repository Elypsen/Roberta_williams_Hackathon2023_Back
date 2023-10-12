const express = require("express");
// const { Logout } = require("../controllers/logout.routes");
const router = express.Router();

const { getFestivalByDpt } = require("../controllers/festivalControllers");
// const { authenticateToken } = require("../authJWT");

router.get("/", getFestivalByDpt);
// router.post("/logout", Logout)
// router.post("/inscription", createUser)
// router.use(authenticateToken);
module.exports = router;