<template>
  <v-navigation-drawer v-model="$root.drawer" absolute left temporary>
    <v-list nav>
      <v-list-item-group v-model="$root.current_view">
        <v-list-item
          @click="drawerNavigation(item.id - 1)"
          v-for="item in nav_items"
          :key="item.id"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const nav_items = ref([
      {
        id: 1,
        icon: "mdi-car",
        name: "Fahrzeug Eintragen",
        link: "",
      },
      {
        id: 2,
        icon: "mdi-handshake",
        name: "Kunden",
        link: "",
      },
      {
        id: 3,
        icon: "mdi-account-group",
        name: "Mitarbeiter",
        link: "",
      },
      {
        id: 4,
        icon: "mdi-file-document-edit",
        name: "Rechnungen",
        link: "",
      },
    ]);

    return {
      // rerturn data
      nav_items,
    };
  },
};
</script>
