const { Controller } = require('egg');

class ArticleController extends Controller {
  /**
   * 查询所有文章
   */
  async queryArticle() {
    const { ctx } = this;
    const { query } = ctx;
    const result = await ctx.service.article.query(query);
    ctx.body = result;
  }
  /**
   * 根据文章详细
   */
  async findArticleDetails() {
    const { ctx } = this;
    const { id } = ctx.params;
    const result = await ctx.service.article.details(id);
    ctx.body = result;
  }
  /**
   * 新增文章
   */
  async insertArticle() {
    const { ctx } = this;
    const { body } = ctx.request;
    const result = await ctx.service.article.insert(body);
    ctx.body = result;
  }
  /**
   * 修改文章信息
   */
  async updateArticle() {
    const { ctx } = this;
    const { body } = ctx.request;
    const result = await ctx.service.article.update(body);
    ctx.body = result;
  }
  /**
   * 删除文章
   */
  async deleteArticle() {
    const { ctx } = this;
    const {
      body: { id },
    } = ctx.request;
    const result = await ctx.service.article.delete(id);
    ctx.body = result;
  }
}

module.exports = ArticleController;
