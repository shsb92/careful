<template>
  <v-card class="mx-auto" tile>
    <!-- TODO make pictures editabel -->
    <v-img
      height="181"
      src="https://imgs.search.brave.com/5AluOuYLdveVMrF8UY8imxki3F-wVxtNzAnQS4uja6k/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93Lndh/bGxoYXZlbi5jYy9m/dWxsLzgzL3dhbGxo/YXZlbi04M2drbG8u/anBn"
    >
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
            src="https://pps.whatsapp.net/v/t61.24694-24/185364672_401614914664101_5276432332347794902_n.jpg?ccb=11-4&oh=01_AVwXsZnJEKnIQJHOdduMrlBshVDM5UAX13FY3HL0DlqokQ&oe=625E81F3"
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
      <v-row>
        <v-col><strong>Rolle:</strong></v-col>
        <v-col>
          {{ employee.role }}
        </v-col>
      </v-row>
      <v-row>
        <v-col> <strong>Personalnummer:</strong> </v-col>
        <v-col>
          {{ employee.pers_nr }}
        </v-col>
      </v-row>
      <v-btn block class="my-3" color="accent"> Urlaub Eintragen </v-btn>
      <v-btn block class="my-3" color="accent"> Krankmeldung </v-btn>
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

    const changeProfileImage = () => {
      alert("change");
    };

    return {
      // return data
      transparent,
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
