export const menuItemDesktop = [
  {
    name: "Home",
    path: "/",
    subMenu: undefined,
  },
  {
    name: "Campaign",
    path: "/campaign-detail/binz's-debut-nft-collection-on-tuniver",
    subMenu: undefined,
  },

  {
    name: "Inventory",
    path: "/inventory",
    subMenu: undefined,
  },
  {
    name: "Gallery",
    path: "/gallery",
    subMenu: undefined,
  },
];

export interface ISubmenu {
  name: string;
  path: string;
  key: number;
  target?: string;
}

export interface IMenuMobile {
  name: string;
  path: string;
  key?: string | number;
  subMenu?: ISubmenu[] | undefined;
  target?: string;
}
export const menuMobileItem: IMenuMobile[] = [
  {
    name: "Home",
    path: "/",
    subMenu: undefined,
  },
  {
    name: "Campaign",
    path: "/campaign-detail/binz's-debut-nft-collection-on-tuniver",
    subMenu: undefined,
  },

  {
    name: "Inventory",
    path: "/inventory",
    subMenu: undefined,
  },
  {
    name: "Gallery",
    path: "/gallery",
    subMenu: undefined,
  },
];
