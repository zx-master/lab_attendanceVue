import Vue from 'vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store'
import {postRequest} from "./api/RequestMethod";
import {putRequest} from "./api/RequestMethod";
import {deleteRequest} from "./api/RequestMethod";
import {getRequest} from "./api/RequestMethod";
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.postRequest = postRequest;

Vue.config.productionTip = false
Vue.use(MuseUI);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
