<template>
  <div>
    <h1>Rechnungen</h1>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table :headers="headers" :items="invoices" :search="search">
      <template v-slot:item="{ item }">
        <tr @click="viewinvoice(item.id)">
          <td>
            {{ item.invoice_nr }}
          </td>
          <td>
            {{ item.period }}
          </td>
          <td>
            {{ item.customer }}
          </td>
          <td>
            <v-icon v-if="item.payed"> mdi-check </v-icon>
            <v-icon v-else> mdi-cancel </v-icon>
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
        text: "Rechnungsnummer",
        align: "start",
        filterable: true,
        value: "invoice_nr",
      },
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
        text: "Zahlungsstatus",
        align: "start",
        filterable: true,
        value: "payed",
      },
    ]);
    const invoices = ref([
      {
        id: 1,
        customer: "Langen",
        period: "21.02.2022 - 20.03.2022",
        invoice_nr: "1234",
        payed: true,
      },
      {
        id: 2,
        customer: "Saarbrücken",
        period: "21.02.2022 - 20.03.2022",
        invoice_nr: "2345",
        payed: true,
      },
      {
        id: 3,
        customer: "Gießen",
        period: "21.02.2022 - 20.03.2022",
        invoice_nr: "3456",
        payed: false,
      },
    ]);
    const search = ref(null);

    /**
     *
     */
    const viewinvoice = (invoice_id) => {
      alert(`view${invoice_id}`);
    };

    return {
      // return data
      headers,
      invoices,
      search,
      // return methods
      viewinvoice,
    };
  },
};
</script>
