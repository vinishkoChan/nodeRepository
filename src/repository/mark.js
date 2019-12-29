const Mark = require("../models/mark");

class MarkRepository {
  async create(userId, productId, markValue) {
    await Mark.create({
      user_id: userId,
      product_id: productId,
      value: markValue
    });
  }
  async delete(userId, productId) {
    await Mark.destroy({
      where: { user_id: userId, product_id: productId }
    });
  }

  async calculateTotalMark(productId) {
    let markNumber = await Mark.count({ where: { product_id: productId } });
    let markSum = await Mark.sum("value", { where: { product_id: productId } });
    let markTotalValue = 0;

    if (markNumber && markSum) {
      markTotalValue = (markSum / markNumber).toFixed(2);
      console.log(markSum + " / " + markNumber + " = " + markTotalValue);
    }

    return markTotalValue;
  }

  async find(userId, productId) {
    if (
      await Mark.findOne({ where: { user_id: userId, product_id: productId } })
    ) {
      return true;
    }
    return false;
  }

  async update(userId, productId, value) {
    await Mark.update(
      { value: value },
      { where: { user_id: userId, product_id: productId } }
    );
  }

  async countMarks(productId) {
    let result = await Mark.count({ where: { product_id: productId } });
    if (result) {
      return result;
    }
    return 0;
  }
}

module.exports = new MarkRepository();
