const User = require("../repository/user");
const NotAcceptableError = require("../errors/NotAcceptableError");

class AccountController {

    update(id, userData) {
        return User.update(id, userData);
    }
}

module.exports = new AccountController();