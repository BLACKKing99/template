import "vue-router";

declare module "vue-router" {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    // 是否登录
    isAuth?: boolean;
    // 标题
    title?: string;
    // 是否显示父级菜单
    showParent?: boolean;
    // 左侧图标 传类就好了
    extraIcon?: string;
    // 是否要在menu中显示
    showMenu?: boolean;
  }
}
