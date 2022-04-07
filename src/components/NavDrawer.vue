<template>
  <v-navigation-drawer v-model="$root.drawer" absolute left temporary>
    <v-list nav>
      <v-list-item-group v-model="$root.current_view">
        <v-list-item
          @click="drawerNavigation(item.id - 1)"
          v-for="item in nav_items"
          :key="item.id"
          class="primary--text"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <v-list-item
        @click="bottomNavigation(item.id)"
        v-for="item in nav_bottom_items"
        :key="item.id"
        :class="`${item.color}--text`"
      >
        <v-list-item-icon>
          <v-icon :color="item.color">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup(props, vm) {
    const nav_items = ref([
      {
        id: 1,
        icon: "mdi-car",
        name: "Fahrzeug Eintragen",
      },
      {
        id: 2,
        icon: "mdi-handshake",
        name: "Kunden",
      },
      {
        id: 3,
        icon: "mdi-account-group",
        name: "Mitarbeiter",
      },
      {
        id: 4,
        icon: "mdi-file-document-edit",
        name: "Rechnungen",
      },
    ]);
    const nav_bottom_items = ref([
      {
        id: 5,
        icon: "mdi-account",
        name: "Profile",
        color: "primary",
      },
      {
        id: 6,
        icon: "mdi-logout",
        name: "Logout",
        color: "accent",
      },
    ]);

    /**
     *
     */
    const bottomNavigation = (id) => {
      if (id === 5) return vm.root.$router.push({ name: "profile" });
      // Add actual logout function and then redirect
      return vm.root.$router.push({ name: "login" });
    };

    return {
      // rerturn data
      nav_items,
      nav_bottom_items,
      // return method
      bottomNavigation,
    };
  },
};
</script>
