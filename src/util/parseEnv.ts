import { cloneDeep } from 'lodash'

// 由于.env里面是数据都是字符串类型  这边直接可以转化为数据应该有的数据类型
export default (() => {
  const envCopy = cloneDeep(import.meta.env)
  Object.entries(envCopy).forEach(([key, value]) => {
    // 如果是布尔类型 boolean
    if (value === 'true' || value === 'false') envCopy[key] = value === 'true'
    // 如果是数字类型 number
    else if (/^\d$/.test(value)) envCopy[key] = Number(value)
    else if (value === 'null') envCopy[key] = null
    else if (value === 'undefine') envCopy[key] = undefined
    else envCopy[key] = value
  })
  return envCopy
})()
