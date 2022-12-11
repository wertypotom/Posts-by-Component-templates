import React, { FC } from 'react';
import { IPost } from '../../interfaces/Posts';
import './Post.css';

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  const { body, id, title } = post;

  return (
    <div className='Post' data-testid='Post'>
      <div className='post__ccontent'>
        <strong>
          {id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <button className='post__btns'>Remove</button>
    </div>
  );
};

export default Post;
