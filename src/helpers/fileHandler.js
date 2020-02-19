const fs = require('fs');
const dir = require("../config").app.resDir;


class FileHandler {

    get(fileName, res) {

        try{
        
        fs.createReadStream(`${dir}/${fileName}`).pipe(res);

        }catch(err){

            throw err;

        }
    }
    
    delete(fileName){

        if(fs.existsSync(`${dir}/${fileName}`)){

            fs.unlink(`${dir}/${fileName}`, (err) => {
                if(err){
                    throw err;
                }
            })
        }
    }

}

module.exports = new FileHandler();