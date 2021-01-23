// ---------------------------------------------- modules import
import { IBlog } from "../models/blog";

export interface IBlogListProps {
  blogs: IBlog[];
  title: string;
  onDelete: (id: number) => void;
}
