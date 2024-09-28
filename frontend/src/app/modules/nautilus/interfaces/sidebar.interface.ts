export interface ISidebarItem {
  name: string;
  icon: string;
  subRoutes?: ISidebarItem[];
}

export interface IExtendedSidebarItem extends ISidebarItem {
}

export interface ISidebarSection {
  red: ISidebarItem[];
  appearance: ISidebarItem[];
  extra: ISidebarItem[];
  system: ISidebarItem[];
}