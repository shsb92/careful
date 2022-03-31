import Vue from "vue";
import VueRouter from "vue-router";
import CustomerIndex from "../views/CustomerIndex.vue";
import EmployeeIndex from "../views/EmployeeIndex.vue";
import InvoiceIndex from "../views/InvoiceIndex.vue";
import NewCarView from "../views/NewCarView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "new_car",
    component: NewCarView,
  },
  {
    path: "/customers",
    name: "customers",
    component: CustomerIndex,
  },
  {
    path: "/employees",
    name: "employees",
    component: EmployeeIndex,
  },
  {
    path: "/invoices",
    name: "invoices",
    component: InvoiceIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
