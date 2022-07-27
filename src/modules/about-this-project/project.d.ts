type ProjectInfo = {
  org: Organisation;
  teams: Team[];
  repos: Repository[];
};

type Organisation = {
  avatar_url: string;
  login: string;
  url: string;
  description: string;
  html_url: string;
  created_at: string;
  updated_at: string;
};

type Repository = {
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  languages: RepositoryLanguage[];
};

type RepositoryLanguage = {
  language: string;
  weight: number;
  defaultColor: string;
};

type Team = {
  name: string;
  slug: string;
  description?: string;
  members: Member[];
};

type Member = {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  twitter_username: string;
  created_at: string;
  updated_at: string;
};
