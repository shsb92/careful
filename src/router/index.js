import Vue from "vue";
import VueRouter from "vue-router";
import CustomerIndex from "@/views/CustomerIndex.vue";
import CustomerView from "@/views/CustomerView.vue";
import EmployeeIndex from "@/views/EmployeeIndex.vue";
import EmployeeView from "@/views/EmployeeView.vue";
import InvoiceIndex from "@/views/InvoiceIndex.vue";
import InvoiceView from "@/views/InvoiceView.vue";
import Login from "@/views/AppLogin.vue";
import MasterData from "@/views/MasterDataView.vue";
import NewCarView from "@/views/NewCarView.vue";
import Profile from "@/views/ProfileView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "new_car",
    component: NewCarView,
    meta: {
      view_value: 0,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      view_value: 0,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      view_value: 5,
    },
  },
  {
    path: "/customers",
    name: "customers",
    component: CustomerIndex,
    meta: {
      view_value: 1,
    },
  },
  {
    path: "/customers/:id",
    name: "customers_view",
    component: CustomerView,
    meta: {
      view_value: 1,
    },
  },
  {
    path: "/employees",
    name: "employees",
    component: EmployeeIndex,
    meta: {
      view_value: 2,
    },
  },
  {
    path: "/employees/:id",
    name: "employees_view",
    component: EmployeeView,
    meta: {
      view_value: 2,
    },
  },
  {
    path: "/invoices",
    name: "invoices",
    component: InvoiceIndex,
    meta: {
      view_value: 3,
    },
  },
  {
    path: "/invoices/:id",
    name: "invoices_view",
    component: InvoiceView,
    meta: {
      view_value: 3,
    },
  },
  {
    path: "/master_data",
    name: "master_data",
    component: MasterData,
    meta: {
      view_value: 4,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
