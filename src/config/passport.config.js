const passport = require("passport");
const local = require("passport-local");
const { userModel } = require(".//models/users.js");
const {
  createHash,
  isValidPassword,
} = require("../routes/utils/hashBcrypt.js");

const localStrategy = local.Strategy
const initializePassport = () => {
    passport.use('register', new localStrategy({
        passReqToCallback: true,
        usernameField: 'email'
    }, async(req, username, password, done)=>{
        const {first_name, last_name, email}= req.body
        try{
            let user = await userModel.findOne({"email"})
            if (user) return done(null , false)

            let newuser = {
                first_name,
                last_name,
                email,
                password: createHash(password),
            }
            let  result = await userModel.create(newuser);
            return done(null, result)
        } catch (error){
            return done(error)
        }
    }
    ))
};
module.exports = { initializePassport };
