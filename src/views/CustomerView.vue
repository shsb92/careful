<template>
  <div>
    <h1>{{ customer.name }}</h1>
    <v-col class="p-0">
      <h3>Adresse</h3>
      <v-row>
        <v-col>
          <strong>Straße, Haus Nr.</strong> <br />
          <strong>Stadt, PLZ</strong> <br />
          <strong>Unternehmen</strong> <br />
        </v-col>
        <v-col>
          {{ customer.street }}, {{ customer.house_nr }} <br />
          {{ customer.city }}, {{ customer.postal_code }} <br />
          {{ customer.company.name }} <br />
        </v-col>
      </v-row>
      <v-divider class="mt-5"></v-divider>
      <v-col>
        <v-row>
          <h1>Auktionszentren</h1>
          <v-spacer></v-spacer>
          <v-btn
            @click="expand = !expand"
            v-if="!expand"
            class="mt-2"
            icon
            color="success"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
          <v-btn
            @click="expand = !expand"
            v-if="expand"
            class="mt-2"
            icon
            color="accent"
            ><v-icon>mdi-close</v-icon></v-btn
          >
          <v-btn
            @click="storeSubmitter()"
            v-if="expand"
            class="mt-2"
            icon
            color="success"
            ><v-icon>mdi-floppy</v-icon></v-btn
          >
        </v-row>
      </v-col>
      <v-expand-transition>
        <v-text-field
          v-show="expand"
          label="Name"
          placeholder="Placeholder"
          v-model="new_submitter"
          solo
        ></v-text-field>
      </v-expand-transition>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table
        hide-default-footer
        :headers="headers"
        :items="customer.submitters"
        :search="search"
        mobile-breakpoint="0"
      ></v-data-table>
    </v-col>
  </div>
</template>
<script>
import { onMounted, ref } from "@vue/composition-api";
export default {
  props: {
    customer_id: Number,
  },
  setup(props) {
    const customer = ref({
      name: "Test Auktionszentrum",
      street: "Beispielstraße",
      house_nr: "14",
      city: "Hanau",
      postal_code: "34552",
      company: { id: 1, name: "Auktion und Markt" },
      submitters: [
        { id: 1, name: "Beispieleinlieferer" },
        { id: 2, name: "Beispieleinlieferer Zwei" },
      ],
    });
    const expand = ref(false);
    const search = ref(null);
    const headers = ref([
      {
        text: "Name",
        align: "start",
        filterable: true,
        value: "name",
      },
    ]);
    const new_submitter = ref("");

    const storeSubmitter = () => {
      console.log(new_submitter.value);
      new_submitter.value = "";
      expand.value = false;
    };

    onMounted(() => {
      console.log(props.customer_id);
    });

    return {
      // return data
      customer,
      expand,
      search,
      headers,
      new_submitter,
      // return methods
      storeSubmitter,
    };
  },
};
</script>
