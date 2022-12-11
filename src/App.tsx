import { useState } from 'react';
import './App.css';
import PostItem from './components/Post/Post';
import { IPost } from './styles/Posts';

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
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

export default App;
