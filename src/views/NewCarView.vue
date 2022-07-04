<template>
  <div class="h-100">
    <h1>Fahrzeugaufnahme</h1>
    <v-row class="my-6">
      <v-col cols="12" sm="6" class="py-0">
        <v-autocomplete
          solo
          v-model="selected_customer"
          :items="customer"
          item-text="name"
          label="Einlieferer"
          return-object
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-dialog
          ref="dialog"
          v-model="date_modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Aufnahmedatum"
              append-icon="mdi-calendar"
              readonly
              solo
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            header-color="black white--text"
            color="accent"
            scrollable
            locale="de-de"
          >
            <v-spacer></v-spacer>
            <v-btn text color="blue-grey darken-1" @click="date_modal = false">
              Cancel
            </v-btn>
            <v-btn text color="accent" @click="$refs.dialog.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <h3 class="mt-3">Fahrzeugdaten</h3>
    <v-row class="my-6">
      <v-col cols="12" sm="6" class="py-0">
        <v-text-field label="Fahrzeugbezeichnung" solo></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-text-field label="Fahrgestellnummer (letzte 6)" solo></v-text-field>
      </v-col>
    </v-row>
    <v-btn @click="addCar()" class="mt-5" block color="accent">Eintragen</v-btn>
  </div>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup(props, vm) {
    const date = ref(null);
    const date_modal = ref(false);
    const selected_customer = ref(null);
    const customer = ref([
      {
        id: 1,
        name: "Saarbrücken",
        adresse: "ABCStraße 5, XXXXX Stadt",
      },
      {
        id: 1,
        name: "Dreieich",
        adresse: "ABCStraße 5, XXXXX Stadt",
      },
    ]);

    const addCar = () => {
      vm.root
        .call({
          url: "indexcenters",
          method: "get",
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      // return data
      date,
      date_modal,
      selected_customer,
      customer,
      // return methods
      addCar,
    };
  },
};
</script>
