import { FormEvent, useState } from 'react';

const Input = ({
  handleSubmit,
}: {
  handleSubmit: (event: FormEvent<HTMLFormElement>, value: string) => void;
}) => {
  const [newTaskName, setNewTaskName] = useState('');

  return (
    <form
      className='flex gap-4 pb-6'
      onSubmit={(event) => {
        handleSubmit(event, newTaskName);
        setNewTaskName('');
      }}
    >
      <input
        type='text'
        className='w-full border-blue-300 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring-2 dark:bg-softPeach dark:text-balticSea'
        placeholder='Add...'
        value={newTaskName}
        onChange={(event) => {
          setNewTaskName(event.target.value);
        }}
      />
      <button
        type='submit'
        className='bg-funBLue px-4 py-2 font-bold text-softPeach dark:bg-denimBLue dark:text-balticSea'
      >
        Add
      </button>
    </form>
  );
};

export default Input;
