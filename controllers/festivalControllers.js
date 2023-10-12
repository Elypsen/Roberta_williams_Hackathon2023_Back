const Festival = require("../models/festival")

async function getFestivalByDpt(req, res) {
    console.log("yesy")
    try {
        const departements= await Festival.find({id_User: req.params.id_User })
      //const tasks = await Task.find();
      res.status(200).json(departements);
    } catch (err) {
      res.status(404).json({ message: "getDepartements : " + err.message });
    }
    
}
module.exports = {
  getFestivalByDpt,
    
  }