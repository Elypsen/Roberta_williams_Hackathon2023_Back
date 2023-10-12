const Festival = require("../models/festival")


const getAllFestival = async(req, res) => {
  try{
      const festivals = await Festival.find({}).limit(50);
      res.status(200).json(festivals);
  }catch(err){
      console.log("getAllFestival :", err.message)
  }
}
const getFestivalByDpt= async(req, res)=> {
    try {
      const departements= await Festival.find({"fields.departement_principal_de_deroulement": req.body.dpt})
      res.status(200).json(departements);
    } catch (err) {
      res.status(404).json({ message: "getDepartements : " + err.message });
    }
    
}
const getFestivalByNom= async(req, res)=> {
    try {
      const partielName = req.body.nom; // Les trois premières lettres du nom du festival
    const regex = new RegExp(`^${partielName}`, 'i'); // Crée une expression régulière pour correspondre aux trois premières lettres (insensible à la casse)
      const festivalName= await Festival.find({
        'fields.nom_du_festival': { $regex: regex }
      })
      res.status(200).json(festivalName);
    } catch (err) {
      res.status(404).json({ message: "festivalName : " + err.message });
    }
    
}

module.exports = {
  getFestivalByDpt,
  getFestivalByNom,
  getAllFestival,
  }