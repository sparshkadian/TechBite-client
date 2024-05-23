export interface blog {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: number;
  banner: string;
}

export interface userBlog {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

export interface user {
  id: number;
  name: string;
  email: string;
}

export interface userSocials {
  id: number;
  type: string;
  link: string | null;
  image: string;
}
