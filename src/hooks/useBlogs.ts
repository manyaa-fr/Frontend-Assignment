import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '../api/Blogs';

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
};