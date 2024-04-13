import { IconAperture, IconBrandGithub, IconStar } from '@tabler/icons-vue';

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
  { header: 'App' },
  {
    title: 'Generate',
    icon: IconAperture,
    to: '/dashboards/modern',
  },
  { header: 'Github' },
  {
    title: 'Repository',
    icon: IconBrandGithub,
    to: '/dashboards/modern',
  },
  { header: 'TripoSR' },
  {
    title: 'Repository',
    icon: IconStar,
    to: '/dashboards/modern',
  },
];

export default sidebarItem;
