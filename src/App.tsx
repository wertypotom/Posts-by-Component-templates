import { useState } from 'react';
import './App.css';
import PostItem from './components/Post/Post';
import PostList from './components/PostList/PostList';
import { IPost } from './interfaces/Posts';

function App() {
  const [posts, setPosts] = useState<IPost[]>([
    {
      id: 1,
      title: 'javascript',
      body: 'This is my first prooject',
    },
    {
      id: 2,
      title: 'Typescript',
      body: 'This is my typescript project',
    },
    {
      id: 3,
      title: 'React',
      body: 'I am coding on react',
    },
  ]);
  return (
    <div className='app'>
      <PostList posts={posts} title='Мои посты' />
    </div>
  );
}

export default App;
