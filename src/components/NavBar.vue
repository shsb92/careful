<template>
  <v-app-bar app class="w-100" height="80" elevate-on-scroll>
    <v-btn @click="$root.drawer = !$root.drawer" icon>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-img
      src="@/assets/careful_Service_Logo.png"
      max-height="150"
      max-width="150"
    ></v-img>
  </v-app-bar>
</template>
