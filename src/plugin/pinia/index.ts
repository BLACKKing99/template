import { App } from "vue";
import { createPinia } from "@/store";

export const setupPinia = (app: App) => {
  app.use(createPinia());
};
