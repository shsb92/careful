<template>
  <v-app-bar app class="w-100 black" height="80" elevate-on-scroll>
    <v-btn
      v-if="!is_login"
      color="white"
      @click="$root.drawer = !$root.drawer"
      icon
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-spacer v-if="!is_login"></v-spacer>
    <v-img
      src="@/assets/careful_Service_Logo.png"
      max-height="150"
      max-width="150"
    ></v-img>
  </v-app-bar>
</template>
<script>
import { computed } from "@vue/composition-api";
export default {
  setup(props, vm) {
    const is_login = computed(() => {
      return vm.root._route.name === "login";
    });

    return {
      // return computed
      is_login,
    };
  },
};
</script>
