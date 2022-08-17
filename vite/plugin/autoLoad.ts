import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'
export const autoLoadAPI = () => {
  return AutoImport({
    imports: ['vue', 'vue-router'],
    dts: resolve(__dirname, '../../preset/auto-imports.d.ts')
  })
}

export const autoLoadComps = () => {
  return Components({
    resolvers: [
      ElementPlusResolver()
    ],
    dirs: ['src/components/common'],
    dts: resolve(__dirname, '../../preset/components.d.ts')
  })
}
