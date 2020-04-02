const { Controller } = require('egg');

class InformationController extends Controller {
  async queryInformation() {
    const { ctx } = this;
    const { query } = ctx;
    const result = await ctx.service.information.query(query);
    ctx.body = result;
  }
  async insertInformation() {
    const { ctx } = this;
    const { body } = ctx.request;
    const result = await ctx.service.information.insert(body);
    ctx.body = result;
  }
  async updateInformation() {
    const { ctx } = this;
    const { body } = ctx.request;
    const result = await ctx.service.information.update(body);
    ctx.body = result;
  }
  async deleteInformation() {
    const { ctx } = this;
    const {
      body: { id },
    } = ctx.request;
    const result = await ctx.service.information.delete(id);
    ctx.body = result;
  }
}

module.exports = InformationController;
