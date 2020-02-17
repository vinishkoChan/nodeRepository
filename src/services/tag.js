const Tag = require("../repository/tag");

class TagService {

    create(name) {

        return Tag.create(name);

    }

    delete(id){

        Tag.delete(id);

    }

    readByTagName(tagName) {

        return Tag.readByTagName(tagName);

    }

}

module.exports = new TagService();
