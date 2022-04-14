<template>
  <div>
    <v-col>
      <v-row>
        <h1>Unternehmen</h1>
        <v-spacer></v-spacer>
        <dialog-company-add></dialog-company-add>
      </v-row>
    </v-col>

    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="companies"
      :search="search"
      mobile-breakpoint="0"
    >
      <template v-slot:item="{ item }">
        <tr @click="viewCompany(item.id)">
          <td>
            {{ item.name }}
          </td>
        </tr>
      </template></v-data-table
    >
  </div>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup(props, vm) {
    const headers = ref([
      {
        text: "Name",
        align: "start",
        filterable: true,
        value: "name",
      },
    ]);
    const companies = ref([
      {
        id: 1,
        name: "Auktions GmbH",
        adress: "langen",
      },
    ]);
    const search = ref(null);

    /**
     *
     */
    const viewCompany = (company_id) => {
      vm.root.$router.push({ name: "companies_view", id: company_id });
    };

    return {
      // return data
      headers,
      companies,
      search,
      // return methods
      viewCompany,
    };
  },
};
</script>
