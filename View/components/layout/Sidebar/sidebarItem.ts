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
    to: '/',
  },
  { header: 'Github' },
  {
    title: 'Repository',
    icon: IconBrandGithub,
    to: 'https://github.com/YORIMICHI-Dev/Maurice',
    type: 'external',
  },
  { header: 'TripoSR' },
  {
    title: 'Repository',
    icon: IconStar,
    to: 'https://github.com/VAST-AI-Research/TripoSR',
    type: 'external',
  },
];

export default sidebarItem;
