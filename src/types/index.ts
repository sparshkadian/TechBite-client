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
  website: string | null;
  instagram: string | null;
  github: string | null;
  twitter: string | null;
}
