require("dotenv").config();
const jwt = require("jsonwebtoken");

function generateAccessToken(pseudo, role) {
  return jwt.sign({ username: pseudo, role: role }, process.env.SECRET, { expiresIn: "3600sec" });
}

function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];

  if (token == null) {
    res.sendStatus(401).json({ message: "token inexistant." });
  } else {
    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        res.status(403).json({ message: "authenticateToken : " + err.message });
      } else {
        req.user = user;
      }
    });
  }
  next();
}

module.exports = {
  generateAccessToken,
  authenticateToken,
};
