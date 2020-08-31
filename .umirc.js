// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/login',
      component: '../layouts/login',
      routes: [{ path: '/login', component: '../pages/login' }],
    },
    {
      path: '/products',
      component: '../layouts/products',
      routes: [{ path: '/products', component: '../pages/products' }],
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [{ path: '/', component: '../pages/index' }],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react',{
        antd: true,
        layout:{
          name: 'Ant Design',
          locale: true,
          theme:"dark"
        },
        dva: true,
        dynamicImport: false,
        title: 'umi-learn',
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
      },
    ],
  ],
};
