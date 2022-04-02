import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuex from "vuex";

Vue.use(vuex);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuex,
  render: (h) => h(App),
}).$mount("#app");
