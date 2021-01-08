import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/dashboard",
    name: "dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/TheDashboard.vue"),
    children: [
      {
        path: "pages",
        name: "dashboard/page",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/ThePages.vue")
      },
      {
        path: "functions",
        name: "dashboard/function",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/TheFunctions.vue"
          )
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/TheLogin.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/TheSignup.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
