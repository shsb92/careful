<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <nav-drawer></nav-drawer>
      <v-container class="mt-5 h-100">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
.h-100 {
  min-height: calc(100% - 80px);
}
</style>
