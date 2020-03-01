const { Service } = require('egg');
const resultStatus = require('../middleware/resultStatus');

class ArticleService extends Service {
  /**
   *  @description 查询所有文章
   *  @returns {Array}
   */
  async query(query) {
    const { ctx } = this;
    const result = await ctx.model.Article.find(query);
    return resultStatus(result);
  }
  /**
   *  @description 根据id查询文章详细信息
   *  @param {String} 文章id号
   *  @returns {Object}
   */
  async details(id) {
    const { ctx } = this;
    const result = await ctx.model.Article.findOne({ _id: id });
    return resultStatus(result);
  }
  /**
   *  @description 添加文章
   *  @param {Object} body
   *  @returns {Object}
   */
  async insert(body) {
    const { ctx } = this;
    const result = await ctx.model.Article.create(body);
    return resultStatus(result);
  }
  /**
   *  @description 更新文章
   *  @param {Object} body
   *  @returns {Object}
   */
  async update(body) {
    const { ctx } = this;
    const { _id } = body;
    if (!_id) {
      result = null;
    }
    const result = await ctx.model.Article.update({ _id: _id }, body);
    return resultStatus(result);
  }
  /**
   *  @description 删除文章
   *  @param {String} _id
   *  @returns {Object}
   */
  async delete(id) {
    const { ctx } = this;
    const result = await ctx.model.Article.remove({ _id: id });
    return resultStatus(result);
  }
}
module.exports = ArticleService;
