type Head = {
  title: string;
  metas?: {
    name: string;
    content: string;
  }[];
  links?: {
    rel: string;
    href: string;
  }[];
};
