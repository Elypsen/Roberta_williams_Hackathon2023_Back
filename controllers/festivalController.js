const Festival = require("../models/festival");

const getAllFestival = async (req, res) => {
  try {
    const festoch = await Festival.find({}).limit(50);
    res.status(200).json(festoch);
  } catch (err) {
    console.log("getAllFestival :", err.message);
  }
};
const getFestivalByDpt = async (req, res) => {
  try {
    const departements = await Festival.find({
      "fields.departement_principal_de_deroulement": req.body.dpt,
    });
    res.status(200).json(departements);
  } catch (err) {
    res.status(404).json({ message: "getDepartements : " + err.message });
  }
};

module.exports = {
  getFestivalByDpt,
  getAllFestival,
};
