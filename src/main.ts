import Vue from 'vue';
import AOS from 'aos';
import animated from 'animate.css';
import VueClipboard from 'vue-clipboard2';
import vmodal from 'vue-js-modal';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';

Vue.use(vmodal);

Vue.use(AOS);
Vue.use(animated);
Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount('#app');
