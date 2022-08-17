import { RouteRecordRaw } from "vue-router";

export default {
  path: "/admin",
  component: () => import("@/components/layout/admin.vue"),
  meta: {
    showMenu: true,
    showParent: false,
    isAuth: true,
    title: "错误页面",
    extraIcon: "icon-cuowu",
  },
  children: [
    {
      path: "404",
      component: () => import("@/view/error/404.vue"),
      meta: {
        title: "404页面",
        showMenu: true,
        isAuth: true,
        extraIcon: "icon-icon-test1",
      },
      name: "404",
    },
    {
      path: "403",
      component: () => import("@/view/error/403.vue"),
      meta: {
        title: "403页面",
        showMenu: true,
        isAuth: true,
        extraIcon: "icon-icon-test",
      },
      name: "403",
    },
  ],
} as RouteRecordRaw;
