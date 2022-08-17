<template>
  <div class="w-full flex items-center justify-between">
    <div class="flex items-center">
      <div class="mr-3 cursor-pointer" @click="menuStore.isCollapse = !menuStore.isCollapse">
        <i class="iconfont icon-zhankaicaidan text-[24px]" v-if="menuStore.isCollapse"></i>
        <i class="iconfont icon-shouqicaidan text-[24px]" v-else></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in menuStore.navMenu" :key="item.name">
          {{ item.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="flex items-center h-full mr-4">
      <el-popover placement="bottom" popper-class="message-popper" :width="300" trigger="click">
        <template #reference>
          <div class="mr-3">
            <i class="iconfont icon-lingdang text-2xl cursor-pointer" title="消息"></i>
          </div>
        </template>
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="通知" name="first">通知</el-tab-pane>
          <el-tab-pane label="消息" name="second">消息</el-tab-pane>
        </el-tabs>
      </el-popover>
      <div class="mr-2" @click="toggle">
        <i class="iconfont icon-cancel-full-screen" v-if="isFullscreen" title="取消全屏"></i>
        <i class="iconfont icon-quanping cursor-pointer" v-else title="全屏"></i>
      </div>
      <el-popover placement="bottom" popper-class="user-popper" :width="40" trigger="click">
        <template #reference>
          <div class="flex items-center cursor-pointer duration-500 h-full hover:bg-slate-200 px-2 rounded-sm">
            <el-image class="w-7" src="/img/logo.jpg" fit="cover"></el-image>
            <span class="ml-2">admin</span>
          </div>
        </template>
        <ul class="flex flex-col">
          <li class="flex h-[30px] items-center justify-center cursor-pointer">
            <i class="iconfont icon-tuichu1 mr-2"></i>
            <span>退出系统</span>
          </li>
        </ul>
      </el-popover>
    </div>
  </div>
</template>

<script lang='ts' setup>
import useStore from '@/store'
import { IRouterMenu } from '@/types/sotre'
import { useFullscreen } from '@vueuse/core';
const menuStore = useStore.useMenuStore()
const route = useRoute()

const { isFullscreen, toggle } = useFullscreen();

const activeName = ref<string>('first')

watch(() => route, (route) => {
  const nav = route.matched.map(item => {
    const obj = { name: item.name, path: item.path, title: item.meta.title } as IRouterMenu
    return obj
  })
  menuStore.addHistoryMenu({
    name: route.name as string,
    path: route.fullPath,
    title: route.meta.title
  })
  menuStore.navMenu = []
  menuStore.navMenu.push(...nav)
}, { deep: true, immediate: true })



</script>

<style scoped lang='scss'>
</style>

<style>
.user-popper {
  padding: 0 !important;
  width: 120px !important;
  min-width: 120px !important;
}
</style>
