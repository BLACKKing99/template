export interface IRouterMenu {
  path?: string;
  name?: string;
  title?: string;
  icon?: string;
  id?: number;
}

export interface IMenu extends IRouterMenu {
  children?: IRouterMenu[];
}
