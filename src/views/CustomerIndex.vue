<template>
  <div>
    <v-col>
      <v-row>
        <h1>Auktionszentren</h1>
        <v-spacer></v-spacer>
        <dialog-customer-add></dialog-customer-add>
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
        <tr @click="viewCustomer(item.id)">
          <td>
            {{ item.location }}
          </td>
        </tr>
      </template></v-data-table
    >
  </div>
</template>
<script>
import { onMounted, ref } from "@vue/composition-api";
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
    const customers = ref([]);
    const search = ref(null);
    /**
     *
     */
    const getCenters = () => {
      vm.root
        .call({
          url: "centers",
          method: "get",
        })
        .then((response) => {
          customers.value = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    };
    /**
     *
     */
    const viewCustomer = (customer_id) => {
      vm.root.$router.push({
        name: "customers_view",
        params: { id: customer_id },
      });
    };

    onMounted(() => {
      getCenters();
    });

    return {
      // return data
      headers,
      customers,
      search,
      // return methods
      viewCustomer,
    };
  },
};
</script>
