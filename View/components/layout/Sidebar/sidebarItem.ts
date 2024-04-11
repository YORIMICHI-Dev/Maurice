import { IconAperture } from '@tabler/icons-vue';

export interface NavItem {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  children?: NavItem[];
  type?: string;
  subCaption?: string;
}

const sidebarItem: NavItem[] = [
  { header: 'Home' },
  {
    title: 'Modern',
    icon: IconAperture,
    to: '/dashboards/modern',
  },
];

export default sidebarItem;
