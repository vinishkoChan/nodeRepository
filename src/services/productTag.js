const ProductTag = require("../repository/productTag");
const Tag = require("../services/tag")
const Product = require("../services/product");
const NotAcceptableError = require("../errors/NotAcceptableError");

class ProductTagService {

    async create(productId, tagName) {

        let tag = await Tag.readByTagName(tagName);

        if(!tag){

            tag = await Tag.create(tagName);

        }

        if(await ProductTag.read(productId, tag.id)){

            throw new NotAcceptableError("Product already has this tag")

        }

        return ProductTag.create(productId, tag.id);

    }

    async list(productId) {

        const product = await Product.read(productId);

        return product.getTags();
    }

    delete(productId, tagId) {

       return ProductTag.delete(productId, tagId);

    }
    
}

module.exports = new ProductTagService();
