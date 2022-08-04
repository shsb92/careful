<template>
  <div>
    <h1>{{ customer.location }}</h1>
    <v-col class="p-0">
      <v-row>
        <v-col>
          <h3>Adresse</h3>
        </v-col>
        <v-col>
          <delete-dialog>
            <template v-slot:footer>
              <v-spacer></v-spacer>
              <v-btn @click="deleteCustomer">Löschen</v-btn>
            </template>
          </delete-dialog>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-row>
        <v-col>
          {{ customer.street }}, {{ customer.house_nr }} <br />
          {{ customer.city }}, {{ customer.postal_code }} <br />
        </v-col>
      </v-row>
      <v-divider class="mt-5"></v-divider>
      <v-col>
        <v-row>
          <h3 class="mt-3">Einlieferer</h3>
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
        class="pt-0"
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
  setup(props, vm) {
    const customer = ref({});
    const deleteDialog = ref(false);
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

    /**
     *
     */
    const getCustomer = () => {
      vm.root
        .call({
          url: `centers/${vm.root._route.params.id}`,
          method: "get",
        })
        .then((response) => {
          customer.value = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    };

    /**
     *
     */
    const storeSubmitter = () => {
      console.log(new_submitter.value);
      new_submitter.value = "";
      expand.value = false;
    };

    /**
     *
     */
    const deleteCustomer = () => {
      vm.root
        .call({
          url: `centers/${vm.root._route.params.id}/delete`,
          method: "delete",
        })
        .then((response) => {
          alert(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    onMounted(() => {
      getCustomer();
    });

    return {
      // return data
      customer,
      deleteDialog,
      expand,
      search,
      headers,
      new_submitter,
      // return methods
      storeSubmitter,
      deleteCustomer,
    };
  },
};
</script>
