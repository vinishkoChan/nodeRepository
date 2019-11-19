const localStrategy = require("passport-local").Strategy;

const user = {
  login: "vasya",
  password: "qwerty"
};

module.exports = function(passport) {
  passport.use(
    "local",
    new localStrategy(
      { usernameField: "login", passReqToCallback: true },
      function(req, login, password, next) {
        if (login != user.login) {
          return next(null, false, "wrong login");
        }
        if (password != user.password) {
          return next(null, false, "wrong password");
        }
        return next(null, user, "user found");
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
