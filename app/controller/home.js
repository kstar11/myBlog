const { Controller } = require('egg');
const { join } = require('path');
const server = require('umi-server');

class HomeController extends Controller {
  constructor(props) {
    super(props);
    this.root = join(__dirname, '..', 'public');
  }
  async index() {
    const { ctx } = this;
    global.host = `${ctx.request.protocol}://${ctx.request.host}`;
    global.href = ctx.request.href;
    const render = server({
      root: this.root,
      polyfill: false,
      dev: ctx.app.config.env === 'local',
    });
    const { ssrHtml, matchPath } = await render({
      req: {
        url: ctx.request.url,
      },
    });
    if (!matchPath) {
      ctx.body = '404 Not Found';
      return;
    }

    ctx.body = ssrHtml;
  }
}

module.exports = HomeController;
