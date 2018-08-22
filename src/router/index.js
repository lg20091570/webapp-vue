import App from '../App';

const index = r => require.ensure([], () => r(require('@/pages/index')), 'index');
// const home = r => require.ensure([], () => r(require('@/pages/home')), 'home');

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/index'
      },
      {//首页主页面
        path: '/index',
        name: 'index',
        component: index
      }
    ]
  }
]
