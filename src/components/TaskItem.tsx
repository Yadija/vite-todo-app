import { IoTrashOutline } from 'react-icons/io5';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

import { Task } from '../interface/Task';

const TaskItem = ({
  name,
  id,
  done,
  toggleDone,
  handleDelete,
}: Task & {
  toggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}) => {
  return (
    <section className='flex justify-between'>
      <button
        className=' flex w-full cursor-pointer gap-4 bg-funBLue px-3 py-2 text-softPeach hover:opacity-90 dark:bg-denimBLue dark:text-balticSea'
        type='button'
        onClick={() => toggleDone(id, !done)}
      >
        <section className='text-2xl'>
          {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </section>
        <p>{name}</p>
      </button>
      <button
        className='cursor-pointer border border-blue-300 bg-white p-2 text-2xl text-funBLue hover:bg-red-500 hover:text-softPeach dark:bg-softPeach dark:text-balticSea dark:hover:bg-red-500 dark:hover:text-softPeach'
        type='button'
        onClick={() => handleDelete(id)}
      >
        <IoTrashOutline />
      </button>
    </section>
  );
};

export default TaskItem;
