import { viteMockServe } from 'vite-plugin-mock'
export const setUpMockjs = (isBuild:boolean) => {
  return viteMockServe({
    // default
    mockPath: 'mock',
    localEnabled: !isBuild
  })
}
