export interface latestBlogsType {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: number;
  banner: string;
}

export interface userBlogType {
  id: number;
  banner: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

export interface user {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface userSocials {
  id: number;
  type: string;
  link: string | null;
  image: string;
}
