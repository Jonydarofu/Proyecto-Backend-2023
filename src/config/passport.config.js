const passport = require("passport");
const local = require("passport-local");
const { userModel } = require(".//models/users.js");
const {
  createHash,
  isValidPassword,
} = require("../routes/utils/hashBcrypt.js");

const localStrategy = local.Strategy;
const initializePassport = () => {
  passport.use(
    "register",
    new localStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
      },
      async (req, username, password, done) => {
        const { first_name, last_name, email } = req.body;
        try {
          let user = await userModel.findOne({ email });
          if (user) return done(null, false);

          let newuser = {
            first_name,
            last_name,
            email,
            password: createHash(password),
          };
          let result = await userModel.create(newuser);
          return done(null, result);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};
passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
    },
    async (username, password, done) => {
      try {
        const user = await userModel.findOne({ email: username });
        if (!user) {
          console.log("user no encontrado");
          return done(null, false);
        }
        if (!isValidPassword(password, user, password))
          return done(null, false);
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )

  passport.use('github', new GithubStrategy({
    clientID: 'Iv23limP4l4PWnqqJhHs',
    clientSecret:'77006d370f221d72c411ea98227d921e3e29627b',
    callbackURL:'http://localhost:8080/apis/sessions/githubcallback'
  }, async(accessToken, refreshToken, profile, done)=>{
    console.log('profile:', profile)
    try{
        let user = await userModel.findOne({email: profile._json.email})
        if(!user){
            let newuser = {
                first_name: profile.username,
                last_name: profile.username,
                email: profile._json.email,
                password: ''
            }
            let result = await userModel.create (newUser)
            return done (null,result)
        }
        return done (null, user)
    } catch (error){
        done(error)
    }
  }))
);
module.exports = { initializePassport };
