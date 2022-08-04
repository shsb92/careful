import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
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
    call: function (config) {
      return new Promise((resolve, reject) => {
        if (config.url !== "login") {
          config.headers = {
            Authorization: `Bearer ${this.$store.state.user.auth_token}`,
          };
        }
        if (config.url !== "/api/locales") {
          config.url = `/api/${config.url}`;
        }

        // create call
        axios(config)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    /**
     *
     */
    drawerNavigation: function (item) {
      if (item === 0)
        return this.$router.push({ name: "new_car" }).catch((error) => {
          if (
            error.name !== "NavigationDuplicated" &&
            !error.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            console.log(error);
          }
        });
      if (item === 1)
        return this.$router.push({ name: "customers" }).catch((error) => {
          if (
            error.name !== "NavigationDuplicated" &&
            !error.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            console.log(error);
          }
        });
      if (item === 2)
        return this.$router.push({ name: "invoices" }).catch((error) => {
          if (
            error.name !== "NavigationDuplicated" &&
            !error.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            console.log(error);
          }
        });
      if (item === 3)
        return this.$router.push({ name: "employees" }).catch((error) => {
          if (
            error.name !== "NavigationDuplicated" &&
            !error.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            console.log(error);
          }
        });

      if (item === 4)
        return this.$router.push({ name: "profile" }).catch((error) => {
          if (
            error.name !== "NavigationDuplicated" &&
            !error.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            console.log(error);
          }
        });
      if (item === 5)
        return this.$router.push({ name: "master_data" }).catch((error) => {
          if (
            error.name !== "NavigationDuplicated" &&
            !error.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            console.log(error);
          }
        });
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
  mounted() {
    this.current_view = this._route.meta.view_value;
  },
  render: (h) => h(App),
}).$mount("#app");
