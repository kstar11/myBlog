const { Service } = require('egg');
const resultStatus = require('../middleware/resultStatus');

class UserService extends Service {
  /**
   * @description 查询所有用户
   * @returns {Array}
   */
  async query() {
    const { ctx } = this;
    const result = await ctx.model.User.find({});
    return resultStatus(result);
  }

  /**
   * @description 登录,匹配账号密码
   * @param {Object} body
   * @returns {Object}
   */
  async login(body) {
    const { ctx } = this;
    const result = await ctx.model.User.findOne({
      userName: body.userName,
      password: body.password,
    });
    let response = {};
    if (!result) {
      response = {
        code: 400,
        message: '账号密码错误',
      };
    } else {
      response = {
        code: 200,
        message: '欢迎回来!',
      };
      ctx.session.userId = result._id.toString();
      ctx.cookies.set('assignment', result._id.toString(), {
        httpOnly: true,
        encrypt: true,
      });
    }
    return response;
  }
  /**
   * @description 修改更新用户信息
   * @param {Object} body
   * @returns {Object}
   */
  async update(body) {
    const { ctx } = this;
    const { _id } = body;
    if (!_id) {
      result = null;
    }
    const result = await ctx.model.User.update({ _id: _id }, body);
    return resultStatus(result);
  }

  /**
   * @description 新增用户
   * @param {Object} body
   * @returns {Object}
   */
  async insert(body) {
    const { ctx } = this;
    const result = await ctx.model.User.create(body);
    return resultStatus(result);
  }
}

module.exports = UserService;
