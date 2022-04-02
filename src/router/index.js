import Vue from "vue";
import VueRouter from "vue-router";
import ToDo from "../views/ToDo";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{ path: "/", name: "main", component: ToDo }],
  mode: "history",
});
