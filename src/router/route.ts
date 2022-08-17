import { RouteRecordRaw } from "vue-router";

export const route: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/view/login/index.vue"),
    name: "login",
  },
];
