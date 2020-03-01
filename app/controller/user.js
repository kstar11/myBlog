const { Controller } = require('egg');

class UserController extends Controller {
  /**
   * 查询所有用户信息
   */
  async queryUser() {
    const { ctx } = this;
    const result = await ctx.service.user.query();
    ctx.body = result;
  }
  /**
   * 登录接口
   */
  async checkLogin() {
    const { ctx } = this;
    const { body } = ctx.request;
    const result = await ctx.service.user.login(body);
    ctx.body = result;
  }
  /**
   * 新增用户
   */
  async insertUser() {
    const { ctx } = this;
    const { body } = ctx.request;
    const result = await ctx.service.user.insert(body);
    ctx.body = result;
  }
  /**
   * 修改更新用户信息
   */
  async updateUser() {
    const { ctx } = this;
    const { body } = ctx.request;
    const result = await ctx.service.user.update(body);
    ctx.body = result;
  }
}

module.exports = UserController;
