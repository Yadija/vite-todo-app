import { Task } from '../interface/Task';
import TaskItem from './TaskItem';

const Tasks = ({
  tasks,
  toggleDone,
  handleDelete,
  query,
}: {
  tasks: Task[];
  toggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
  query: string;
}) => {
  if (query) {
    tasks = tasks.filter((task) => {
      return task.name.toLowerCase().includes(query.toLowerCase());
    });
  }

  return (
    <div>
      <h2 className='px-2 pb-2 pt-1 text-xl font-bold'>Tasks</h2>
      {tasks.length > 0 ? (
        <ul className='flex flex-col gap-2'>
          {tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                toggleDone={toggleDone}
                handleDelete={handleDelete}
                {...task}
              />
            );
          })}
        </ul>
      ) : (
        <span className='text-xl text-funBLue dark:text-denimBLue'>
          {query ? 'No tasks found!' : 'No tasks yet!'}
        </span>
      )}
    </div>
  );
};

export default Tasks;
