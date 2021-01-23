export interface IBlogData {
  id: number;
  author: string;
  body: string;
  title: string;
}

export interface IBlog extends IBlogData {
  [key: string]: any;
}
