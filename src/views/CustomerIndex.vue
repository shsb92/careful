<template>
  <div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table :headers="headers" :items="customers" :search="search">
      <template v-slot:item="{ item }">
        <tr>
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.adress }}
          </td>
          <td>
            <v-btn
              @click.stop="deleteCustomer(item.id)"
              color="error"
              class="float-right"
              icon
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn
              @click.stop="viewCustomer(item.id)"
              color="success"
              class="float-right"
              icon
            >
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            <v-btn
              @click.stop="editCustomer(item.id)"
              color="warning"
              class="float-right"
              icon
            >
              <v-icon>mdi-pen</v-icon>
            </v-btn>
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
      {
        text: "Adresse",
        align: "start",
        filterable: true,
        value: "adress",
      },
      {
        text: "Aktionen",
        align: "end",
        filterable: false,
        value: "actions",
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
