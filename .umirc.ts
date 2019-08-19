import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  routes:[
    { path: '/',
    component: '../layouts/index',
    routes:[
      { path: '/', component: './index' },
      { path: '/list', component: './list/index' },
    ]
   },
   
  ],
  treeShaking: true,
  history: 'hash',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi_ts',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
