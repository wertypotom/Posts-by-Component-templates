import React from 'react';
import './PostList.css';
import { IPost } from '../../interfaces/Posts';
import PostItem from './../Post/Post';

interface PostListProps {
  posts: IPost[];
  title: string;
  removePost: (post: IPost) => void;
}

const PostList = ({ posts, removePost, title }: PostListProps) => {
  return (
    <div className='postList'>
      <h1>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          removePost={removePost}
          number={index + 1}
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;
