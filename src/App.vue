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
.gradiant {
  background: #e52e0d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right bottom,
    #ffffff,
    #e52e0d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right bottom,
    #ffffff,
    #e52e0d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
@media print {
  * {
    visibility: hidden;
  }
  .hidden-section {
    visibility: hidden !important;
  }
  .section-to-print,
  .section-to-print * {
    visibility: visible;
  }
}
</style>
