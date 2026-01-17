import type { Blog, CreateBlogInput } from "../types/Blog";

const BASE_URL = "https://frontend-assignment-39ko.onrender.com/";

export const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(`${BASE_URL}/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export const fetchBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
};

export const createBlog = async (
  blog: CreateBlogInput
): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...blog,
      date: new Date().toISOString(),
    }),
  });

  if (!res.ok) throw new Error("Failed to create blog");
  return res.json();
};