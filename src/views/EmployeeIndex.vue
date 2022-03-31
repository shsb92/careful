<template>
  <div>
    <h1></h1>
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
          <td>
            <v-btn
              @click.stop="deleteemployee(item.id)"
              color="error"
              class="float-right"
              icon
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn
              @click.stop="viewemployee(item.id)"
              color="success"
              class="float-right"
              icon
            >
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            <v-btn
              @click.stop="editemployee(item.id)"
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
        text: "Aktionen",
        align: "end",
        filterable: false,
        value: "actions",
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
