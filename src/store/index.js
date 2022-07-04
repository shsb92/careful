import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
//Axios binding and Token Authentication
Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL = process.env.VUE_APP_SERVER_URL;

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
