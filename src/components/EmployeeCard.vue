<template>
  <v-card class="mx-auto" tile>
    <!-- TODO make pictures editabel -->
    <v-img height="181" src="@/assets/AudiA6.jpg">
      <v-btn class="float-right" color="white" fab text small>
        <v-icon>mdi-pen</v-icon>
      </v-btn>
    </v-img>
    <v-col>
      <v-hover v-slot="{ hover }">
        <v-avatar
          size="100"
          color="white"
          style="position: absolute; top: 130px"
        >
          <v-img
            @click="changeProfileImage()"
            :class="{ 'on-hover': hover }"
            src="@/assets/Lukas.jpg"
          >
            <v-btn
              class="mx-auto my-auto"
              :color="transparent"
              plain
              x-large
              fab
            >
              <v-icon :class="{ 'show-btns': hover }" :color="transparent">
                mdi-pen
              </v-icon>
            </v-btn>
          </v-img>
        </v-avatar>
      </v-hover>
    </v-col>
    <v-list-item class="mt-10">
      <v-list-item-content>
        <v-list-item-title class="title">{{ employee.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ employee.job }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-col v-if="profile">
      <strong class="mr-5">Rolle:</strong>
      {{ employee.role }}
      <dialog-submit-vacation></dialog-submit-vacation>
      <dialog-submit-sick-note></dialog-submit-sick-note>
    </v-col>
    <v-col v-else>
      <strong class="ml-2 mr-5">Rolle:</strong>
      {{ employee.role }}
      <br />
      <br />
      <br />
      <strong class="ml-2">Urlaub:</strong>
      <v-data-table
        hide-default-footer
        :headers="vacations_headers"
        :items="vacations"
      ></v-data-table>
      <br />
      <strong class="ml-2">Krankheit:</strong>
      <v-data-table
        hide-default-footer
        :headers="vacations_headers"
        :items="vacations"
      ></v-data-table>
      <br />
      <br />
      <strong class="ml-2 mr-5">Fahrzeuge seit XXXX:</strong>
      {{ cars_count }}
    </v-col>
  </v-card>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  props: {
    employee: Object,
    profile: Boolean,
  },
  setup() {
    const transparent = ref("rgba(255, 255, 255, 0)");
    const vacations_headers = ref([
      { text: "Von", value: "start_date" },
      { text: "Bis", value: "end_date" },
      { text: "Anzahl Tage", value: "days" },
    ]);
    const vacations = ref([
      {
        start_date: "12-05-2022",
        end_date: "14-05-2022",
        days: 2,
      },
    ]);
    const sickness_header = ref([
      { text: "Von", value: "start_date" },
      { text: "Bis", value: "end_date" },
      { text: "Anzahl Tage", value: "days" },
    ]);
    const sickness = ref([
      {
        start_date: "12-05-2022",
        end_date: "14-05-2022",
        days: 2,
      },
    ]);
    const cars_count = ref(42);

    const changeProfileImage = () => {
      alert("change");
    };

    return {
      // return data
      transparent,
      vacations_headers,
      vacations,
      sickness_header,
      sickness,
      cars_count,
      // return function
      changeProfileImage,
    };
  },
};
</script>
<style>
.on-hover {
  opacity: 0.6;
}
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
