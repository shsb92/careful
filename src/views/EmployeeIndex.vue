<template>
  <div>
    <v-col>
      <v-row>
        <h1>Mitarbeiter</h1>
        <v-spacer></v-spacer>
        <dialog-employee-add></dialog-employee-add>
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
      :items="employees"
      :search="search"
      mobile-breakpoint="0"
    >
      <template v-slot:item="{ item }">
        <tr @click="viewemployee(item.id)">
          <td>
            {{ item.name }}
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
    const employees = ref();
    const search = ref(null);

    /**
     *
     */
    const viewemployee = (employee_id) => {
      vm.root.$router.push({
        name: "employees_view",
        params: { id: employee_id },
      });
    };

    /**
     * Get List of all Employees
     */
    const getEmployees = () => {
      vm.root
        .call({
          url: "users",
          mmethod: "get",
        })
        .then((responsee) => {
          employees.value = responsee.data;
        })
        .catch((error) => {
          console.log(error);
        });
    };

    onMounted(() => {
      getEmployees();
    });

    return {
      // return data
      headers,
      employees,
      search,
      // return methods
      viewemployee,
    };
  },
};
</script>
