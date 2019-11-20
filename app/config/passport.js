const localStrategy = require("passport-local").Strategy;
const User = require("../database/user");

module.exports = function(passport) {
  passport.use(
    "local",
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      async (email, password, next) => {
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
          return next(null, false, "Wrong email or paswword");
        }
        console.log(user.password, password, user.password !== password);
        if (user.password !== password) {
          return next(null, false, "Wrong email or paswword");
        }
        return next(null, user);
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
