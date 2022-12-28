import { useMemo } from 'react';
import { IPost } from '../interfaces/Posts';

export const useSort = (posts: IPost[], sort: string) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a: IPost, b: IPost) =>
        a[sort as keyof IPost] < b[sort as keyof IPost] ? -1 : 1
      );
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts: IPost[], sort: string, searchQuery: string) => {
  const sortedPosts = useSort(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title?.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
  }, [sortedPosts, searchQuery]);

  return sortedAndSearchedPosts;
};
