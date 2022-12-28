import React, { useCallback, useEffect, useRef, useState } from 'react';
import PostService from '../../API/postService';
import PostFilter from '../../components/PostFilter/PostFilter';
import PostForm from '../../components/PostForm/PostForm';
import PostList from '../../components/PostList/PostList';
import { getPages } from '../../helpers/posts';
import { usePosts } from '../../hooks/usePost';
import { IPost } from '../../interfaces/Posts';
import { IFilterState } from '../../interfaces/Sort';
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';
import Modal from '../../UI/Modal/Modal';
import Pagination from '../../UI/Pagination/Pagination';
import './Posts.css';

const Posts = () => {
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
  const bottomLineRef = useRef(null);
  // const totalPages = React.useMemo(() => {
  //   return getPages(totalPostCount, postLimit);
  // }, [totalPostCount]);

  useEffect(() => {
    loadPosts(postsPage, postLimit);
  }, [postsPage]);

  useEffect(() => {
    if (isPostsLoading) return;

    const last = getPages(totalPostCount, postLimit).at(-1);
    console.log(postsPage);

    if (!!last && postsPage <= last) {
      const postObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPostsPage((prev) => prev + 1);
            bottomLineRef.current &&
              postObserver.unobserve(bottomLineRef.current);
          }
        });
      }, {});

      bottomLineRef.current && postObserver.observe(bottomLineRef.current);
    }
  }, [isPostsLoading]);

  // Infinite scroll

  const loadPosts = async (page: number, limit: number) => {
    try {
      setIsPostsLoading(true);
      const response = await PostService.getAll(page, limit);
      setPosts([...posts, ...response.data]);

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

  const setPage = useCallback((page: number) => {
    setPostsPage(page);
  }, []);

  return (
    <div className='post_page'>
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
      <div
        ref={bottomLineRef}
        style={{ height: '3px', backgroundColor: 'red' }}
      ></div>
      {isPostsLoading && <Loader />}
      <Pagination
        currentPage={postsPage}
        pages={totalPages}
        onPageChange={(i) => setPage(i)}
      />
    </div>
  );
};

export default Posts;
