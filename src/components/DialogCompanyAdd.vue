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
        <v-toolbar-title>Unternehmen hinzufügen</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="mt-10">
        <v-text-field v-model="company.name" label="Name" solo></v-text-field>
        <v-btn class="mt-5" block color="accent" @click="uploadCompany()"
          >Speichern</v-btn
        >
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const dialog = ref(false);
    const company = ref({
      name: "",
    });

    /**
     *
     */
    const uploadCompany = () => {
      console.log(company);
    };

    return {
      // return data
      dialog,
      company,
      // return methods
      uploadCompany,
    };
  },
};
</script>
