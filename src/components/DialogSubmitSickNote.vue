<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn block class="my-3" color="accent" v-bind="attrs" v-on="on">
        Krankheit Eintragen
      </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Krankheit Eintragen</v-toolbar-title>
      </v-toolbar>
      <v-container class="mt-10">
        <v-row justify="center">
          <v-col>
            <v-subheader>Krankheitsbeginn:</v-subheader>

            <v-date-picker
              v-model="start_date"
              header-color="black white--text"
              color="accent"
              scrollable
              locale="de-de"
            >
            </v-date-picker>
          </v-col>
          <v-col>
            <v-subheader>Krankheitsende:</v-subheader>

            <v-date-picker
              v-model="end_date"
              header-color="black white--text"
              color="accent"
              scrollable
              locale="de-de"
            >
            </v-date-picker>
          </v-col>
        </v-row>
        <v-text-field
          v-model="days_count"
          label="Anzahl an Fehltagen"
          type="number"
          solo
        ></v-text-field>
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
    const start_date = ref();
    const end_date = ref();
    const days_count = ref();

    return {
      // return data
      dialog,
      start_date,
      end_date,
      days_count,
    };
  },
};
</script>
