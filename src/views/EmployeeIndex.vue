<template>
  <div>
    <v-col>
      <v-row>
        <h1>Mitarbeiter</h1>
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
      :items="employees"
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
    const employees = ref([
      {
        id: 1,
        name: "Max Muster",
      },
      {
        id: 2,
        name: "Mara Muster",
      },
      {
        id: 3,
        name: "Alex Muster",
      },
    ]);
    const search = ref(null);

    /**
     *
     */
    const viewemployee = (employee_id) => {
      alert(`view${employee_id}`);
    };
    /**
     *
     */
    const editemployee = (employee_id) => {
      alert(`edit${employee_id}`);
    };
    /**
     *
     */
    const deleteemployee = (employee_id) => {
      alert(`delete${employee_id}`);
    };

    return {
      // return data
      headers,
      employees,
      search,
      // return methods
      viewemployee,
      editemployee,
      deleteemployee,
    };
  },
};
</script>
