import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import guard from "./guard";
import { route } from "./route";
// import autoRoute from "./auto";
import autoRoute from "./auto";

const router = createRouter({
  history: createWebHistory(),
  routes: [...route, ...autoRoute],
});

export const setupRouter = (app: App) => {
  guard(router);
  // 将路由挂载到VUE上
  app.use(router);
};

export default router;
