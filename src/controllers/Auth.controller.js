const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin.model');

const { SECRET } = require('../config');
const passport = require('passport');

const adminRegister = async (adminData , res) => {
    try {

        let usernameNotTaken = await validateUsername(adminData.username);
        if(!usernameNotTaken) {
            return res.status(400).json({
                message: `Username is already exist`,
            });
        }

        //get password
        const password = await bcrypt.hash(adminData.password, 12);

        const newAdmin = new Admin({
            ...adminData,
            password,
        });

        const adminSignup = await newAdmin.save();

        const payload = {
            newAdmin: {
                id: adminSignup.id
            }
        };

        jwt.sign(
            payload,
            "anystring",
            { expiresIn: 1000 },

            function(err, token){
                if(err){
                  res.send(err)
                }
                res.status(200).json({
                  token,
                  adminSignup,
                  message: 'User Registered Successfully'
                })
              })  

    } catch(err) {
        res.status(400).json({ 'error': err });
    }
};

const adminLogin = async (adminCredit, res) => {
    let { username, password } = adminCredit;

    // check if the admin is in the database
    const admin = await Admin.findOne({ username });
    if(!admin){
        return res.status(404).json({
            message: "Username is not found"
        });
    }

    // check the password
    let PasswordMatch = await bcrypt.compare(password, admin.password);
    if(PasswordMatch){
        // sign in token
        let token = jwt.sign(
            {
                admin_id: admin._id,
                username: admin.username,
            }, SECRET, { expiresIn: '1 days' }
        );

        let result = {
            username: admin.username,
            token: `Bearer ${token}`,
            expiresIn: 24
        };

        return res.status(200).json({ 
            ...result,
            message: "You are login successfully",
         });
    } else {
        return res.status(403).json({
            message: "Incorrect Password",
        });
    }
}

const validateUsername = async username =>  {
    let admin = await Admin.findOne({ username });
    return admin ? false : true;
};

/**
 * @description_passport_middleware
 * protect from other things
 */
 const adminAuth = passport.authenticate('jwt', { session: false});


module.exports = {
    adminRegister,
    adminLogin,
    adminAuth,
}