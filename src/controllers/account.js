const accountService = require("../services/account");
const Response = require("../helpers/response");

class AccountController {
    async update(req, res, next) {
        try {
            const userData = req.body;
            const id = req.session.user.id;
            await accountService.update(id, userData);
            res.json(new Response("Information edited"));
        }catch(err){
            next(err);
        }
    }
}

module.exports = new AccountController();