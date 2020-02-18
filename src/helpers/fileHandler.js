const fs = require('fs');
const dir = require("../config").app.resDir;

class FileHandler {

    getImage(imageName, res) {
        
        fs.createReadStream(`${dir}/${imageName}`).pipe(res);

    }

}

module.exports = new FileHandler();