<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" icon v-bind="attrs" v-on="on"
        ><v-icon>mdi-plus</v-icon></v-btn
      >
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Neues Unternehmen hinzufügen</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="uploadCompany()"> Speichern </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
  </v-dialog>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const dialog = ref(false);

    /**
     *
     */
    const uploadCompany = () => {
      alert("upload");
    };

    return {
      // return data
      dialog,
      // return methods
      uploadCompany,
    };
  },
};
</script>
