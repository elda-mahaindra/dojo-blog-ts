export interface IBlogData {
  author: string;
  body: string;
  title: string;
}

export interface IBlog extends IBlogData {
  id: number;
  [key: string]: any;
}
