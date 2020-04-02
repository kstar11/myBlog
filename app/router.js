'use strict';

/**
 * @param {Egg.Application} app - 实例化egg
 */
module.exports = app => {
  const { router, controller } = app;
  const checkLogin = app.middleware.checkLogin();
  router.get('/api/users', controller.user.queryUser);
  router.post('/api/login', controller.user.checkLogin);
  router.post('/api/users', checkLogin, controller.user.insertUser);
  router.patch('/api/users', checkLogin, controller.user.updateUser);
  router.get('/api/articles', controller.article.queryArticle);
  router.post('/api/articles', checkLogin, controller.article.insertArticle);
  router.patch('/api/articles', checkLogin, controller.article.updateArticle);
  router.delete('/api/articles', checkLogin, controller.article.deleteArticle);
  router.get('/api/articles/:id', controller.article.findArticleDetails);
  router.get('/api/information', controller.information.queryInformation);
  router.post('/api/information', controller.information.insertInformation);
  router.patch('/api/information', controller.information.updateInformation);
  router.delete('/api/information', controller.information.deleteInformation);
  router.get('*', controller.home.index);
};
