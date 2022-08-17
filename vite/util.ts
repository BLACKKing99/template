// import { cloneDeep } from 'lodash'
export const parseEnv = (env:Record<string, any>):IViteEnv => {
// 由于从环境变量中读取的字段都是字符串，因此在这边处理这个字符串使它变成应该的类型
  // const envCopy:any = cloneDeep(env)
  const envCopy:any = env

  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true' || value === 'false') envCopy[key] = value === 'true'
    // 如果是数字类型 number
    else if (/^\d$/.test(value)) envCopy[key] = Number(value)
    else if (value === 'null') envCopy[key] = null
    else if (value === 'undefine') envCopy[key] = undefined
    else envCopy[key] = value
  })
  return envCopy
}
