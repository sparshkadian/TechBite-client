export interface latestBlogsType {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: number;
  banner: string;
}

export interface blogComments {
  blogId: string;
  userId: string;
  comment: string;
}

export interface userBlogType {
  _id?: number;
  banner: string | undefined;
  title: string;
  content: string;
  likes?: number;
  comments?: [blogComments];
}

export interface userType {
  _id: number;
  name: string;
  userName: string;
  email: string;
  avatar: string;
  Country: string;
  Occupation: string;
  Skills: [string];
  github: string;
  website: string;
  instagram: string;
  twitter: string;
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

export interface googleAuthUserDetails {
  email: string;
  name: string;
  avatar: string;
}
