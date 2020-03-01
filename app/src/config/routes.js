export const routes = [
  {
    exact: true,
    path: '/',
    component: '../layouts/Home/index',
    routes: [{ path: '/', component: 'index' }],
  },
  { exact: true, path: '/user', component: '../layouts/User/index' },
];
