<template>
  <div>
    <v-col>
      <v-row>
        <h1>Auktionszentren</h1>
        <v-spacer></v-spacer>
        <v-btn color="success" icon><v-icon>mdi-plus</v-icon></v-btn>
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
      :items="customers"
      :search="search"
      mobile-breakpoint="0"
    >
      <template v-slot:item="{ item }">
        <tr>
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
  setup() {
    const headers = ref([
      {
        text: "Name",
        align: "start",
        filterable: true,
        value: "name",
      },
    ]);
    const customers = ref([
      {
        id: 1,
        name: "Langen",
        adress: "langen",
      },
      {
        id: 2,
        name: "Saarbrücken",
        adress: "saarbrueken",
      },
      {
        id: 3,
        name: "Gießen",
        adress: "giessen",
      },
    ]);
    const search = ref(null);

    /**
     *
     */
    const viewCustomer = (customer_id) => {
      alert(`view${customer_id}`);
    };
    /**
     *
     */
    const editCustomer = (customer_id) => {
      alert(`edit${customer_id}`);
    };
    /**
     *
     */
    const deleteCustomer = (customer_id) => {
      alert(`delete${customer_id}`);
    };

    return {
      // return data
      headers,
      customers,
      search,
      // return methods
      viewCustomer,
      editCustomer,
      deleteCustomer,
    };
  },
};
</script>
