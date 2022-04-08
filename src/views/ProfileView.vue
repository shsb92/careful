<template>
  <employee-card :employee="employee" :profile="true"></employee-card>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const employee = ref({
      id: 1,
      name: "Lukas Seibel",
      job: "Eigentümer/Geschäftsführer",
      pers_nr: "asdf14awesd123",
      role: "admin",
    });

    // API get profile

    return {
      // return data
      employee,
    };
  },
};
</script>
