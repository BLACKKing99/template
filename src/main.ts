import { createApp } from "vue";
import App from "./App.vue";
// 引入路由
import { setupRouter } from "./router";
// 引入插件
import { setupPlugins } from "./plugin";

// NProgress 样式
import "nprogress/nprogress.css";

async function mountedApp() {
  const app = createApp(App);
  setupPlugins(app);
  await setupRouter(app);
  app.mount("#app");
}

mountedApp();
