import { CSSOptions } from "vite";

const CSS: CSSOptions = {
  preprocessorOptions: {
    scss: {
      additionalData: '@import "@/assets/styles/variable.scss";',
    },
  },
};

export default CSS;
