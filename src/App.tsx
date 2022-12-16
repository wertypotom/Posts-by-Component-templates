import React, { useState } from 'react';
import './App.css';
import PostFilter from './components/PostFilter/PostFilter';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import { IPost } from './interfaces/Posts';
import Input from './UI/Input/Input';
import Select from './UI/Select/Select';

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
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });

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
  };

  const removePost = (post: IPost) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='app'>
      <PostForm createPost={createPost} />
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title='Мои посты'
        />
      ) : (
        <h3>No posts found...</h3>
      )}
    </div>
  );
}

export default App;
