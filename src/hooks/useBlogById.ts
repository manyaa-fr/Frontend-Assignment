import { useQuery } from '@tanstack/react-query';
import { fetchBlogById } from '../api/Blogs';

export const useBlogById = (id: number | null) => {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: () => fetchBlogById(id as number),
    enabled: !!id,
  });
};