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
        <v-toolbar-title>Auktionszentrum hinzufügen</v-toolbar-title>
      </v-toolbar>
      <v-container class="mt-10">
        <v-text-field v-model="customer.name" label="Name" solo></v-text-field>
        <v-text-field
          v-model="customer.street"
          label="Straße"
          solo
        ></v-text-field>
        <v-text-field
          v-model="customer.house_nr"
          label="Hausnummer"
          solo
        ></v-text-field>
        <v-text-field v-model="customer.city" label="Ort" solo></v-text-field>
        <v-text-field
          v-model="customer.postal_code"
          label="PLZ"
          solo
        ></v-text-field>
        <v-btn class="mt-5" block color="accent" @click="uploadCustomer()"
          >Speichern</v-btn
        >
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const dialog = ref(false);
    const customer = ref({
      name: "",
      street: "",
      house_nr: "",
      city: "",
      postal_code: "",
    });

    /**
     *
     */
    const uploadCustomer = () => {
      console.log(customer.value);
    };

    return {
      // return data
      dialog,
      customer,
      // return methods
      uploadCustomer,
    };
  },
};
</script>
