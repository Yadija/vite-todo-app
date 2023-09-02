import { KeyboardEvent } from 'react';

const Search = ({
  handleSearch,
}: {
  handleSearch: (event: KeyboardEvent<HTMLInputElement>) => void;
}) => (
  <section className='mb-6'>
    <input
      className='w-full border-blue-300 px-4 py-2  focus:border-blue-300  focus:outline-none focus:ring-2 dark:bg-softPeach dark:text-balticSea'
      placeholder='Search...'
      onKeyUp={handleSearch}
    />
  </section>
);

export default Search;
