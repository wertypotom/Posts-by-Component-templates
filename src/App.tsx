import React, { useEffect, useState } from 'react';
import './App.css';
import PostFilter from './components/PostFilter/PostFilter';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import { usePosts } from './hooks/usePost';
import { IPost } from './interfaces/Posts';
import { IFilterState } from './interfaces/Sort';
import Button from './UI/Button/Button';
import Modal from './UI/Modal/Modal';
import PostService from './API/postService';
import Loader from './UI/Loader/Loader';
import { getPages } from './helpers/posts';
import Pagination from './UI/Pagination/Pagination';

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filter, setFilter] = useState<IFilterState>({
    sort: '',
    query: '',
  });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false);

  const [totalPostCount, setPostTotalCount] = useState<number>(0);
  const [postLimit, setPostLimit] = useState<number>(10);
  const [postsPage, setPostsPage] = useState<number>(1);

  useEffect(() => {
    loadPosts(postsPage, postLimit);
  }, [postsPage]);

  const loadPosts = async (page: number, limit: number) => {
    try {
      setIsPostsLoading(true);
      const response = await PostService.getAll(page, limit);
      setPosts(response.data);

      setPostTotalCount(Number(response.headers['x-total-count']));
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setIsPostsLoading(false);
    }
  };

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
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title='Мои посты'
        />
      )}
      <Pagination
        currentPage={postsPage}
        pages={getPages(totalPostCount, postLimit)}
        onPageChange={(i) => setPostsPage(i)}
      />
    </div>
  );
}

export default App;
