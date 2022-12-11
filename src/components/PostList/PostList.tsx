import React from 'react';
import './PostList.css';
import { IPost } from '../../interfaces/Posts';
import PostItem from './../Post/Post';

interface PostListProps {
  posts: IPost[];
  title: string;
}

const PostList: React.FC<PostListProps> = ({ posts, title }) => {
  return (
    <div className='postList'>
      <h1>{title}</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
