export interface RepositoryDTO {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: null | string;
  fork: boolean;
  url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  stargazers_count: number;
  watchers_count: number;
  language: null | string;
  watchers: number;
}

export interface Owner {
  login: string;
  id: number;
  avatar_url: string;
}
