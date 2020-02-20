const Error = require("../repository/error");

class ErrorStorer {

    async store(err) {

        try{

            let error = new Error({

                date: new Date(),

                text: err.message,

                code: err.status,

                route: err.route,

            });

            await error.save();

        }catch(err) {

            console.log(err);

        }

    }
}

module.exports = new ErrorStorer();