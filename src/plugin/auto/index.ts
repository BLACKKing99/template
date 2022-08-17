import { camelCase } from "lodash";
import { App } from "vue";

// 自动注册全局组件函数
export const autoInstallComps = async (app: App) => {
  const comps = import.meta.glob("../../components/autocomps/*.vue");
  Object.entries(comps).forEach(async ([path, comp]) => {
    const components = (await comp()) as any;
    const name = path.split("/").pop()?.split(".").shift();
    app.component(camelCase(name), components.default);
  });
};
