import { RouteRecordRaw } from "vue-router";

const autoLoadRoute = () => {
  const router = [] as RouteRecordRaw[];
  // 这边没办法处理异步  得学习一下
  const routes = import.meta.globEager("../module/*.ts");

  for (const key of Object.keys(routes)) {
    router.push((routes[key] as any).default);
  }

  return router;
};

export default autoLoadRoute();
