<template>
  <div class="h-screen min-h-screen">
    <el-container class="h-screen">
      <el-aside :width="menuStore.isCollapse ? '56px' : '200px'" class="flex flex-col items-center py-5 duration-300">
        <div class="w-[100px]" :class="menuStore.isCollapse ? 'hidden' : ''">
          <img src="/img/logo.jpg">
        </div>
        <div class="flex-1 pt-[10px] w-full" :class="menuStore.isCollapse ? 'mt-[100px]' : ''">
          <admin-menu />
        </div>
      </el-aside>
      <el-container>
        <el-header class="!h-[90px] !px-[20px] !py-[5px] shadow">
          <div class="w-full h-full flex flex-col">
            <admin-nav class="flex-1" />
            <admin-tab class="flex-1" />
          </div>
        </el-header>
        <el-main>
          <el-scrollbar>
            <router-view v-slot="{ Component }">
              <transition name="el-fade-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import AdminMenu from './layoutComp/AdminMenu.vue'
import AdminTab from './layoutComp/AdminTab.vue'
import AdminNav from './layoutComp/AdminNav.vue'
import useSotre from '@/store'
const menuStore = useSotre.useMenuStore()
</script>

<style scoped lang='scss'>
</style>
