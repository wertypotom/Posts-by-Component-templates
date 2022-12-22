import React, { useEffect, useState } from 'react';
import './PostItem.css';
import { useParams } from 'react-router-dom';
import PostService from '../../API/postService';
import { IPost } from '../../interfaces/Posts';
import Loader from '../../UI/Loader/Loader';

interface PostItemProps {}

const PostItem = ({}: PostItemProps) => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost>();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getPost();
  }, [id]);

  const getPost = async () => {
    try {
      const response = await PostService.getSinglePost(id);
      setPost(response.data);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className='postItem'>
      <h3>Info about post number {id}</h3>
      {post ? (
        <div className='post-info'>
          <h4>Title: {post?.title}</h4>
          <p>About: {post?.body}</p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PostItem;
