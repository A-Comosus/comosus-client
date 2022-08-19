type NavItem = {
  type: 'link' | 'button';
  href: string;
  content: string;
};

type SidebarItem = {
  href: string;
  content: string;
  icon: React.ReactNode;
};
