export default [
  {
    path: '/exception',
    component: '../layouts/index',
    routes: [
      {
        path: '/exception/403',
        title: 'not-permission',
        component: './exception/403',
      },
      {
        path: '/exception/404',
        title: 'not-find',
        component: './exception/404',
      },
      {
        path: '/exception/500',
        title: 'server-error',
        component: './exception/500',
      },
    ],
  },
  {
    path: '/list',
    component: '../layouts/index',
    Routes: ['src/pages/Authorized'],
    authority: ['admin22', 'zsd'],
    routes: [
      // { path: '/', component: './index' },
      // { path: '/list', component: './list/index' },
      { path: '/', component: './list/index', exact: false },
    ]
  },
  {
    path: '/',
    component: '../layouts/index',
    //  Routes: ['src/pages/Authorized'],
    //  authority: ['admin2', 'zsd'],
    routes: [
      { path: '/', component: './index' },
      //  { path: '/list', component: './list/index' },
    ]
  },

]