import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);
//Axios binding and Token Authentication
Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL = process.env.VUE_APP_SERVER_URL;

export default new Vuex.Store({
  state: {
    user: {
      loggedInStatus: true,
      auth_token: "",
    },
  },
  mutations: {
    addWebToken: function (state, webToken) {
      state.user.auth_token = webToken;
    },
    removeWebToken: function (state) {
      state.user.auth_token = "";
    },
  },
  actions: {
    login: function (context, userInput) {
      axios({
        url: "/api/login",
        method: "post",
        data: {
          email: userInput.email,
          password: userInput.password,
        },
      })
        .then((response) => {
          context.commit("addWebToken", response.data.token); // pass the webtoken as payload to the mutation

          router.push({
            path: "/customers",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logput: function (context) {
      //your logout functionality
      context.commit("removeWebToken");
    },
  },
  getters: {},
  setters: {},
  modules: {},
});
