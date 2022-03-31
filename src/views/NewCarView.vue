<template>
  <div class="h-100">
    <h1>Fahrzeugaufnahme</h1>
    <v-row class="mx-1 mt-3">
      <v-col>
        <label for="customer">Kunde</label>
        <v-autocomplete
          id="customer"
          filled
          solo
          v-model="selected_customer"
          :items="customer"
          item-text="name"
          placeholder="Zum suchen schreiben"
          return-object
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-card-title> Fahrzeugdaten </v-card-title>
    <v-row class="mx-1">
      <v-col cols="12" sm="6">
        <v-text-field label="Fahrzeugbezeichnung" solo></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
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
              label="Aufnahme Datum"
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
            color="success"
            scrollable
            locale="de-de"
          >
            <v-spacer></v-spacer>
            <v-btn text color="blue-grey darken-1" @click="date_modal = false">
              Cancel
            </v-btn>
            <v-btn text color="success" @click="$refs.dialog.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row class="mx-1">
      <v-col cols="12" sm="6">
        <v-text-field label="Fahrgestellnummer (letzte 6)" solo></v-text-field>
      </v-col>
    </v-row>
    <v-btn class="mt-5" color="success" text block>Eintragen</v-btn>
  </div>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
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

    return {
      // return data
      date,
      date_modal,
      selected_customer,
      customer,
    };
  },
};
</script>
