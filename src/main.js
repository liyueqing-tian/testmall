import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import router from './router'

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'small',
  zIndex: 3000 ,
  locale
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
