import { defineConfig } from 'umi';


export default {
  outputPath:'wwwroot',
  dva:{},
  antd:{},
  routes: [
    {
      path: '/',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/mysql', component: '../pages/mysql/index' }
      ]
    }
  ],
}
