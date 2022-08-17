import { ConfigEnv, loadEnv } from "vite";
import { server } from "./vite/server";
import { alias } from "./vite/alias";
import setupVitePlugin from "./vite/plugin";
import css from "./vite/css";
import { parseEnv } from "./vite/util";

export default ({ command, mode }: ConfigEnv) => {
  // 处理配置项 .env
  const isBuild = command === "build";
  const root = process.cwd();
  // 初始化env 并且转化成真正的类型
  const env = parseEnv(loadEnv(mode, root));
  return {
    resolve: {
      alias,
    },
    server,
    plugins: setupVitePlugin(isBuild, env),
    css,
  };
};
