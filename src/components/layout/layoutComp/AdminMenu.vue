<template>
  <el-menu :default-active="currentPath" class="admin-menu" unique-opened router :collapse="menuStore.isCollapse"
    collapse-transition>
    <template v-for="(menu, index) in menuStore.menus" :key="index">
      <el-sub-menu v-if="menu.children" :index="(menu.path as string)">
        <template #title>
          <div class="menu-icon">
            <i v-if="menu.icon" class="iconfont" :class="menu.icon" />
          </div>
          <span>{{ menu.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="menu.path === '/' ? `/${cMenu.path}` : `${menu.path}/${cMenu.path}`"
            v-for="(cMenu, cindex) in menu.children" :key="cindex"
            @click="handleMenuClick(cMenu as RouteRecordNormalized)">
            <div class="cmenu-icon">
              <i v-if="cMenu.icon" class="iconfont" :class="cMenu.icon" />
            </div>
            <span>{{ cMenu.title }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item :index="(menu.path as string)" v-else>
        <div class="cmenu-icon">
          <i v-if="menu.icon" class="iconfont" :class="menu.icon" />
        </div>
        <span>{{ menu.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang='ts' setup>
import { useMenuStore } from '@/store/module/menu'
import { RouteRecordNormalized } from 'vue-router'

const menuStore = useMenuStore()

const router = useRouter()

// 获取当前路由，刷新的时候菜单正确定位
const currentPath = computed(() => {
  return router.currentRoute.value.fullPath || menuStore.menus[0].path
})

const handleMenuClick = (menu: RouteRecordNormalized) => {

}
</script>

<style scoped lang='scss'>
.admin-menu {
  @apply w-full border-r-0;

  ::v-deep(.el-sub-menu__title) {
    height: 40px;
    line-height: 40px;
    @apply font-bold text-slate-500;

    .menu-icon {
      height: 100%;
      width: 16px;
    }

    span {
      flex: 1;
      padding-left: 10px;
    }
  }

  ::v-deep(.el-menu-item-group__title) {
    padding: 0;
  }

  ::v-deep(.el-menu-item) {
    height: 40px;
    line-height: 40px;
    padding-left: 20px !important;
    @apply text-slate-500;

    .cmenu-icon {
      width: 16px;
      height: 100%;
    }

    span {
      flex: 1;
      padding-left: 10px;
    }
  }

  .is-active {
    color: var(--el-menu-active-color);
  }
}
</style>
