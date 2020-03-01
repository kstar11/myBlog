module.exports = (options, app) => {
  return async function(ctx, next) {
    const userId = ctx.session.userId;
    if (userId) {
      await next();
    } else {
      ctx.redirect('/');
    }
  };
};
