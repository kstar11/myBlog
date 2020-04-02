const { Service } = require('egg');
const resultStatus = require('../middleware/resultStatus');

class InformationService extends Service {
  /**
   *  @description 查询所有
   *  @returns {Array}
   */
  async query(query) {
    const { ctx } = this;
    const result = await ctx.model.Information.find(query);
    return resultStatus(result);
  }
  /**
   *  @description 添加
   *  @param {Object} body
   *  @returns {Object}
   */
  async insert(body) {
    const { ctx } = this;
    const result = await ctx.model.Information.create(body);
    return resultStatus(result);
  }
  /**
   *  @description 更新
   *  @param {Object} body
   *  @returns {Object}
   */
  async update(body) {
    const { ctx } = this;
    const { _id } = body;
    if (!_id) {
      result = null;
    }
    const result = await ctx.model.Information.update({ _id: _id }, body);
    return resultStatus(result);
  }
  /**
   *  @description 删除
   *  @param {String} _id
   *  @returns {Object}
   */
  async delete(id) {
    const { ctx } = this;
    const result = await ctx.model.Information.remove({ _id: id });
    return resultStatus(result);
  }
}
module.exports = InformationService;
