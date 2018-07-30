import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/components/Home";
import About from "@/components/About";
import ChoiceAdd from "@/components/Choice/Add";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/order",
      name: "ChoiceAdd",
      component: ChoiceAdd
    }
  ]
});
