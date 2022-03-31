import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCompositionAPI from "@vue/composition-api";

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

/**
 * The following block of code is used to automatically register
 * Vue components. It recursively scans this directory for the Vue
 * components and automatically register them with their "basename" and directory
 * if they are not in the views or main directory.
 *
 * Eg. ./components/Example.vue -> <components-example></components-example>
 */

const files = require.context("./", true, /\.vue$/i);
files.keys().map((key) => {
  let split = key.split("/");
  split = split.slice(Math.max(split.length - 2, 0));
  if (split[0] === "views" || split[0] === "." || split[0] === "components") {
    Vue.component(key.split("/").pop().split(".")[0], files(key).default);
    return;
  }
  split = split.join("");
  Vue.component(split.split(".")[0], files(key).default);
});

Vue.mixin({
  methods: {
    /**
     * Helper function for API-Calls
     *
     * @param config all the axios config needed to execute the call
     */
    // call: function (config) {
    //   return new Promise((resolve, reject) => {
    //     // if the url is any url but the login one, add the api version
    //     if (
    //       config.url !== "/api/locales" &&
    //       !config.url.includes("/api/tool")
    //     ) {
    //       config.url = `/api/v1/${config.url}`;
    //     }

    //     config.headers = {
    //       Authorization: `Bearer ${Vue.$keycloak.token}`,
    //     };
    //     // create call
    //     axios(config)
    //       .then((response) => {
    //         resolve(response);
    //       })
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   });
    // },
    /**
     *
     */
    drawerNavigation: function (item) {
      if (item === 0) return this.$router.push({ name: "new_car" });
      if (item === 1) return this.$router.push({ name: "customers" });
      if (item === 2) return this.$router.push({ name: "employees" });
      if (item === 3) return this.$router.push({ name: "invoices" });
    },
  },
});

new Vue({
  router,
  store,
  vuetify,
  data: {
    drawer: false,
    current_view: 0,
  },
  render: (h) => h(App),
}).$mount("#app");
