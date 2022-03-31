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
      :items="invoices"
      :search="search"
      mobile-breakpoint="0"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>
            {{ item.customer }}
          </td>
          <td>
            {{ item.period }}
          </td>
          <td>
            <v-btn
              @click.stop="deleteinvoice(item.id)"
              color="error"
              class="float-right"
              icon
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn
              @click.stop="viewinvoice(item.id)"
              color="success"
              class="float-right"
              icon
            >
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            <v-btn
              @click.stop="editinvoice(item.id)"
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
        text: "Zeitraum",
        align: "start",
        filterable: true,
        value: "period",
      },
      {
        text: "Kunde",
        align: "start",
        filterable: true,
        value: "customer",
      },
      {
        text: "Aktionen",
        align: "end",
        filterable: false,
        value: "actions",
      },
    ]);
    const invoices = ref([
      {
        id: 1,
        customer: "Langen",
        period: "21.02.2022 - 20.03.2022",
      },
      {
        id: 2,
        customer: "Saarbrücken",
        period: "21.02.2022 - 20.03.2022",
      },
      {
        id: 3,
        customer: "Gießen",
        period: "21.02.2022 - 20.03.2022",
      },
    ]);
    const search = ref(null);

    /**
     *
     */
    const viewinvoice = (invoice_id) => {
      alert(`view${invoice_id}`);
    };
    /**
     *
     */
    const editinvoice = (invoice_id) => {
      alert(`edit${invoice_id}`);
    };
    /**
     *
     */
    const deleteinvoice = (invoice_id) => {
      alert(`delete${invoice_id}`);
    };

    return {
      // return data
      headers,
      invoices,
      search,
      // return methods
      viewinvoice,
      editinvoice,
      deleteinvoice,
    };
  },
};
</script>
