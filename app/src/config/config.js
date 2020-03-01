import { routes } from './routes';
const config = {
  ssr: true,
  outputPath: '../public',
  routes: routes,
  // for dev server
  publicPath: 'http://localhost:8000/',
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: true,
        },
        antd: true,
        hd: false,
        targets: { ie: 11 },
        locale: {
          baseNavigator: false,
          useLocalStorage: false,
        },
        dynamicImport: {
          webpackChunkName: true,
        },
      },
    ],
  ],
  runtimePublicPath: true,
  disableCSSModules: true,
  cssModulesWithAffix: true,
};

export default config;
