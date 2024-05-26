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

export interface userType {
  id: number;
  name: string;
  userName: string;
  email: string;
  avatar: string;
}

export interface userSocials {
  id: number;
  type: string;
  link: string | null;
  image: string;
}

export interface signupFormDataType {
  name: string;
  email: string;
  password: string;
}

export interface loginFormDataType {
  email: string;
  password: string;
}
