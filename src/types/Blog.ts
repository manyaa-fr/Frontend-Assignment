export interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  category: string[];
  coverImage: string;
  date: string; // ISO string
}

export type CreateBlogInput = Omit<Blog, "id">;