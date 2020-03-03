export const routes = [
  {
    path: '/',
    component: '../layouts/Home/index',
    routes: [
      {
        exact: true,
        path: '/',
        component: 'Index',
      },
      {
        exact: true,
        path: '/article',
        component: 'Article',
      },
    ],
  },
  { exact: true, path: '/user', component: '../layouts/User/index' },
];
