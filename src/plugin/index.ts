import { App } from "vue";
import { setupTailWindCss } from "./tailwindcss";
import { setupPinia } from "./pinia";
import { autoInstallComps } from "./auto";

export const setupPlugins = (app: App) => {
  setupTailWindCss();
  // 注册elementplus组件库函数
  autoInstallComps(app);
  setupPinia(app);
};
