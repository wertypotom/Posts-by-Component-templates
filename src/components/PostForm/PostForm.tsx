import React, { useState } from 'react';
import { IPost } from '../../interfaces/Posts';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import './PostForm.css';

interface PostFormProps {
  createPost: (post: IPost) => void;
}

const PostForm = ({ createPost }: PostFormProps) => {
  const [post, setPost] = useState<IPost>({
    id: Date.now(),
    title: '',
    body: '',
  });

  const addNewPost = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    createPost(post);

    setPost({
      id: Date.now(),
      title: '',
      body: '',
    });
  };

  return (
    <form onSubmit={addNewPost}>
      <Input
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        placeholder='Post title'
        type='text'
      />
      <Input
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        value={post.body}
        placeholder='Post title'
        type='text'
      />
      <Button type='submit'>Add post</Button>
    </form>
  );
};

export default PostForm;
