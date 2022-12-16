import React from 'react';
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';
import './PostFilter.css';

interface IFilterState {
  sort: string;
  query: string;
}

interface PostFilterProps {
  filter: IFilterState;
  setFilter: (data: IFilterState) => void;
}

const PostFilter = ({ filter, setFilter }: PostFilterProps) => {
  return (
    <div className='postFilter'>
      <Input
        placeholder='Search...'
        onChange={(event) =>
          setFilter({
            ...filter,
            query: event.target.value,
          })
        }
        value={filter.query}
      />
      <Select
        value={filter.sort}
        sortPosts={(value) =>
          setFilter({
            ...filter,
            sort: value,
          })
        }
        devaultValue=''
        options={[
          { title: 'By name', value: 'title' },
          { title: 'By description', value: 'body' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
