const dotenv = require('dotenv');
const multer = require('multer');

dotenv.config();

module.exports = {
  app: {
    port: parseInt(process.env.APP_PORT, 10),

    resDir: process.env.RESOURCE_DIR
  },

  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.env.RESOURCE_DIR)
    },
    filename: function (req, file, cb) {
      cb(null, "product" + req.params.id + "image-" + Date.now())
    }
  })

};