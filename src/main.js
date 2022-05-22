//改文件是整个项目的入口文件
// 引入vue
import Vue from 'vue'
// 引入APP组件,他是所有组件的父组件
import App from './App.vue'

//引入ElementUI组件库
import ElementUI from 'element-ui';
//引入ElementUI组件库的全部样式
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);
// 创建vue实例
new Vue({
    el: '#app',
    render: h => h(App),
})