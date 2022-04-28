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
        <v-toolbar-title>Mitarbeitenden hinzufügen</v-toolbar-title>
      </v-toolbar>
      <v-container class="mt-10">
        <v-text-field v-model="employee.name" label="Name" solo></v-text-field>
        <v-text-field
          v-model="employee.street"
          label="Straße"
          solo
        ></v-text-field>
        <v-text-field
          v-model="employee.house_nr"
          label="Hausnummer"
          solo
        ></v-text-field>
        <v-text-field v-model="employee.city" label="Ort" solo></v-text-field>
        <v-text-field v-model="employee.postal_code" label="PLZ" solo>
        </v-text-field>
        <v-text-field
          v-model="employee.email"
          label="Email"
          solo
        ></v-text-field>
        <v-text-field
          v-model="employee.job"
          label="Jobbeschreibung"
          solo
        ></v-text-field>
        <v-autocomplete
          v-model="employee.role"
          :items="roles"
          item-text="name"
          label="Rolle"
          return-object
          solo
        ></v-autocomplete>
        <v-btn class="mt-5" block color="accent" @click="uploadEmployee()"
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
    const roles = ref([{ id: 1, name: "Auktion und Markt" }]);
    const employee = ref({
      name: "",
      street: "",
      house_nr: "",
      city: "",
      postal_code: "",
      email: "",
      job: "",
      role: "",
    });

    /**
     *
     */
    const uploadEmployee = () => {
      console.log(employee);
    };

    return {
      // return data
      dialog,
      employee,
      roles,
      // return methods
      uploadEmployee,
    };
  },
};
</script>
