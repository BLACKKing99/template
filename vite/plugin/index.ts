import vue from '@vitejs/plugin-vue'
import { PluginOption } from 'vite'
import { setUpMockjs } from './mockjs'
import { autoLoadAPI, autoLoadComps } from './autoLoad'

export default (isBuild:boolean, env:IViteEnv) => {
  
  const plugin:PluginOption[] = [
    vue(),
    // setUpMockjs(isBuild),
    autoLoadAPI(),
    autoLoadComps()
  ]
  return plugin
}
