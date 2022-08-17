import { RouteRecordRaw } from "vue-router";

export default {
  path: "/",
  component: () => import("@/components/layout/admin.vue"),
  redirect: "/welcome",
  meta: {
    showMenu: true,
    showParent: false,
    isAuth: true,
    title: "首页",
    extraIcon: "icon-shouye1",
  },
  children: [
    {
      path: "welcome",
      component: () => import("@/view/welcome/welcome.vue"),
      meta: {
        title: "首页",
        showMenu: true,
        showParent: true,
        isAuth: true,
        extraIcon: "icon-connection",
      },
      name: "welcome",
    },
  ],
} as RouteRecordRaw;
