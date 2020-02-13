const User = require("../repository/user");
const UserRole = require("../repository/userRole");
const UnauthorizedError  =  require("../errors/UnauthorizedError")

class UserService {
  async signUp(userData) {
    return await User.create(userData);
  }

  async login(email, password, next) {
    const user = await User.findUser(email);

    if (!user || !user.validatePassword(password)) {
      return next(new UnauthorizedError("Wrong email or password"), false);
    }
    user.role = await UserRole.getRole(user.dataValues.id);
    if (!user.role) {
      return next(new Error(), false);
    }

    return next(null, user);
  }
}

module.exports = new UserService();
