import React, { useState } from 'react';
import './App.css';
import PostFilter from './components/PostFilter/PostFilter';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import { IPost } from './interfaces/Posts';
import { IFilterState } from './interfaces/Sort';
import Button from './UI/Button/Button';
import Modal from './UI/Modal/Modal';

function App() {
  const [posts, setPosts] = useState<IPost[]>([
    {
      id: 1,
      title: 'B. javascript',
      body: 'This is my first prooject',
    },
    {
      id: 2,
      title: 'A. Typescript',
      body: 'Okey. This is my typescript project',
    },
    {
      id: 3,
      title: 'C.React',
      body: 'I am coding on react',
    },
  ]);
  const [filter, setFilter] = useState<IFilterState>({
    sort: '',
    query: '',
  });
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const sortedPosts = React.useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a: IPost, b: IPost) =>
        a[filter.sort as keyof IPost] < b[filter.sort as keyof IPost] ? -1 : 1
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase())
    );
  }, [sortedPosts, filter.query]);

  const createPost = (post: IPost) => {
    setPosts([...posts, post]);
    setIsModalVisible(false);
  };

  const removePost = (post: IPost) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='app'>
      <Button onClick={() => setIsModalVisible(true)}>Create Post</Button>
      <Modal
        visible={isModalVisible}
        closeModal={() => setIsModalVisible(false)}
      >
        <PostForm createPost={createPost} />
      </Modal>
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        removePost={removePost}
        posts={sortedAndSearchedPosts}
        title='Мои посты'
      />
    </div>
  );
}

export default App;
