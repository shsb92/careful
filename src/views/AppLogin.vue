<template>
  <div class="my-auto">
    <h3 class="mx-1">Login</h3>
    <v-form>
      <v-text-field
        prepend-icon="mdi-account"
        name="login"
        label="Email"
        type="text"
        v-model="login_data.email"
      ></v-text-field>
      <v-text-field
        id="password"
        prepend-icon="mdi-lock"
        name="password"
        label="Password"
        :type="password_type ? 'password' : 'text'"
        :append-icon="password_type ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="togglePassword"
        v-model="login_data.password"
      ></v-text-field>
    </v-form>
    <v-spacer></v-spacer>
    <v-btn class="accent" @click="login()" block>Login</v-btn>
  </div>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup(props, vm) {
    const password_type = ref(true);
    const login_data = ref({
      email: "",
      password: "",
    });
    /**
     * Toggle Visibility of Password
     */
    const togglePassword = () => {
      if (password_type.value) {
        password_type.value = false;
        return;
      }
      password_type.value = true;
    };

    /**
     * Auth User against Backend
     */
    // const login = () => {
    //   vm.root
    //     .call({
    //       url: "login",
    //       method: "post",
    //       data: login_data.value,
    //     })
    //     .then(() => {
    //       vm.root.$router.push({ name: "customers" }).catch((error) => {
    //         if (
    //           error.name !== "NavigationDuplicated" &&
    //           !error.message.includes(
    //             "Avoided redundant navigation to current location"
    //           )
    //         ) {
    //           console.log(error);
    //         }
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
    const login = () => {
      //passing the username and password in an object as payload to the login action
      vm.root.$store.dispatch("login", {
        email: login_data.value.email,
        password: login_data.value.password,
      });
    };

    return {
      // return data
      login_data,
      password_type,
      // return methods
      login,
      togglePassword,
    };
  },
};
</script>
