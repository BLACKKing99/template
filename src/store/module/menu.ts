import { defineStore } from "pinia";
import router from "@/router";
import { IRouterMenu, IMenu } from "@/types/sotre";
import { localCatch } from "@/util";

const catchHistoryMenu = (localCatch.getItem("historyMenu")?.data || [
  {
    id: 1,
    name: "首页",
    path: "/",
    title: "首页",
  },
]) as IRouterMenu[];

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menus: getMenus(),
    historyMenu: catchHistoryMenu as IRouterMenu[],
    navMenu: [] as IRouterMenu[],
    isCollapse: false,
  }),
  actions: {
    delHistoryMenu(route: IRouterMenu) {
      const index = this.historyMenu.findIndex(
        (item) => item.name === route.name
      );
      if (index - 1 < 0) {
        if (this.historyMenu.length === 1) {
          // 说明历史菜单中只有一个了
          router.push("/");
        } else {
          router.push({
            path: this.historyMenu[index + 1]?.path as string,
          });
        }
      } else {
        router.push({
          path: this.historyMenu[index - 1]?.path as string,
        });
      }
      this.historyMenu.splice(index, 1);
    },
    addHistoryMenu(route: IRouterMenu) {
      const index = this.historyMenu.findIndex(
        (item) => item.name === route.name
      );
      if (index === -1) {
        this.historyMenu.push(route);
      }
      localCatch.setItem("historyMenu", this.historyMenu);
    },
  },
});

const getMenus = () => {
  let routes = router
    .getRoutes()
    .filter((item) => item.meta.showMenu && item.children.length);

  routes.forEach((item) => {
    item.children = item.children.filter((value) => value.meta?.showMenu);
  });

  const menus: IMenu[] = routes.map((menu) => {
    let route: IMenu;
    if (menu.meta?.showParent) {
      // 如果是子菜单的需要显示一级菜单， 从children中要显示的取第一个
      const firstMenu = menu.children.filter((i) => i.meta?.showParent);
      route = {
        icon: firstMenu[0].meta?.extraIcon,
        title: firstMenu[0].meta?.title,
        name: firstMenu[0].name as string,
        path: firstMenu[0].path,
      };
    } else {
      route = {
        name: menu.name,
        path: menu.path,
        title: menu.meta.title,
        icon: menu.meta.extraIcon,
        children: [],
      } as IMenu;

      route.children = menu.children.map((cmenu) => {
        return {
          name: cmenu.name,
          path: cmenu.path,
          title: cmenu.meta?.title,
          icon: cmenu.meta?.extraIcon,
        } as IRouterMenu;
      });
    }

    return route;
  });
  return menus;
};
