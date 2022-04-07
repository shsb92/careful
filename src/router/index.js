import Vue from "vue";
import VueRouter from "vue-router";
import CustomerIndex from "../views/CustomerIndex.vue";
import EmployeeIndex from "../views/EmployeeIndex.vue";
import InvoiceIndex from "../views/InvoiceIndex.vue";
import Login from "../views/AppLogin.vue";
import NewCarView from "../views/NewCarView.vue";
import Profile from "../views/ProfileView.vue";

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
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
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
    path: "/employees",
    name: "employees",
    component: EmployeeIndex,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
