const Festival = require('../models/Festival')

const getAllFestival = async(req, res) => {
    try{
        const festoch = await Festival.find({}).limit(50);
        res.status(200).json(festoch);
    }catch(err){
        console.log("getAllFestival :", err.message)
    }
}

module.exports = {
    getAllFestival,
}