import { resolve } from "path";
import { AliasOptions } from "vite";
console.log(resolve(__dirname, "../src"));

export const alias: AliasOptions = {
  "@/": `${resolve(__dirname, "../src")}/`,
  "components/": `${resolve(__dirname, "../src/components")}/`,
  "views/": `${resolve(__dirname, "../src/views")}/`,
  "api/": `${resolve(__dirname, "../src/api")}/`,
};
