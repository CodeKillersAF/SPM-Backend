const Admin = require('../models/Admin.model');
const { SECRET } = require('../config');

// extract request file
const { Strategy, ExtractJwt } = require('passport-jwt');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
}

module.exports = (passport) => {

    passport.use(new Strategy(options, async(payload, done) => {
        await Admin.findById(payload.admin_id)
            .then(async admin => {
                if(admin) {
                    return done(null, admin);
                }
                return done(null, false);
            }).catch((error) => {
                return done(null, false);
            })
    }))
}