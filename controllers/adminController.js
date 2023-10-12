const Admin = require("../models/admin");
const argon2 = require("argon2");
const { generateAccessToken } = require("../authJWT");
async function createAdmin(req, res) {
    // #swagger.tags = ['admins']
      // #swagger.description = 'Endpoint to create a new admin.'
      // #swagger.summary = 'Create a new admin'
      // #swagger.parameters['admin'] = { description: 'admin object', required: true, type: 'object'}
    const admin = new Admin(req.body);
    console.log(admin)
    await admin.validate();
    try {
        const hash = await argon2.hash(admin.password);
        console.log(hash)
        admin.password = hash;
        await Admin.create(admin);
        res.status(201).json(admin);
    } catch (err) {
        res.status(404).json({ message: "createAdmin : " + err.message });
    }
}

async function connectAdmin(req, res) {
    // #swagger.tags = ['Security']
    // #swagger.summary = 'Get authentication token'
    // #swagger.description = 'Endpoint to authenticate a admin and return a JWT token'
    
    
    let username = req.body.username;
    try {
        const admin = await Admin.findOne({ username: username });
        try {
            if (await argon2.verify(admin.password, req.body.password)) {
                const token = generateAccessToken(admin.username,admin.role );
                res.status(200).json(token);
            } else {
                res.status(400).json({ message: "Mauvais mot de passe ! " });
            }
        } catch (err) {
            res.status(400).json({ message: "connectadmin : " + err.message });
        }
    } catch (err) {
        res.status(404).json({ message: "connexion : " + err.message });
    }
}
module.exports = {
    createAdmin,
    connectAdmin
}