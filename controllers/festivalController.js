const Festival = require("../models/Festival");
const { v4: uuidv4 } = require("uuid");

// Générer un nouvel UUID (v4)
const uuid = uuidv4();
const getSampleFestival = async (req, res) => {
  try {
    const festivals = await Festival.find({}).limit(50);
    res.status(200).json(festivals);
  } catch (err) {
    console.log("getAllFestival :", err.message);
  }
};
const getOneFestival = async (req, res) => {
  try {
    const festival = await Festival.find({ recordid: req.params.id });
    res.status(200).json(festival);
  } catch (err) {
    console.log("getOneFestival :", err.message);
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
const getFestivalByName = async (req, res) => {
  try {
    const partielName = req.body.nom; // Les trois premières lettres du nom du festival
    const regex = new RegExp(`^${partielName}`, "i"); // Crée une expression régulière pour correspondre aux trois premières lettres (insensible à la casse)
    const festivalName = await Festival.find({
      "fields.nom_du_festival": { $regex: regex },
    });
    res.status(200).json({festivalName, });
  } catch (err) {
    res.status(404).json({ message: "nomDuFestival : " + err.message });
  }
};
const createFestival = async (req, res) => {
  const body = req.body.festival;
  const festival = body;
  festival.recordid = uuid;
  console.log(festival);
  try {
    await Festival.create(festival);
    res.status(200).json(festival);
  } catch (err) {
    res.status(404).json({ message: "createfestival : " + err.message });
  }
};

const updateFestival = async (req, res) => {
  try {
    console.log(req.body);
    const festival = await Festival.findByIdAndUpdate(
      req.params.id,
      req.body.festival
    );
    res.status(200).json(festival);
  } catch (err) {
    res.status(404).json({ message: "updateFestival : " + err.message });
  }
};

const getAllFestival = async(req, res)=>{
  try{
    const festivals =  await Festival.find({})
    res.status(200).json(festivals)
  }catch(err){
    res.status(400).json({message: "GetALL :" + err.message})
  }
}



module.exports = {
  getSampleFestival,
  getFestivalByDpt,
  getOneFestival,
  getFestivalByName,
  getAllFestival,
  createFestival,
  updateFestival,
};
