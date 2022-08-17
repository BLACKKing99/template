import { Router } from "vue-router";
import NProgress from "nprogress";
import { useTitle } from "@vueuse/core";
class Guard {
  route: Router;
  constructor(router: Router) {
    this.route = router;
    this.init();
  }
  init() {
    this.beforeEach();
    this.afterEach();
  }
  beforeEach() {
    this.route.beforeEach((to, from, next) => {
      // 路由守卫
      NProgress.start();
      // 切换title
      const title = useTitle();
      title.value = `lzf | ${to.meta.title}`;
      next();
    });
  }

  afterEach() {
    this.route.afterEach((to, from) => {
      NProgress.done();
    });
  }
}

export default (router: Router) => {
  new Guard(router);
};
