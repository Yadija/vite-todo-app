import { Task } from '../interface/Task';
import TaskItem from './TaskItem';

const Tasks = ({
  tasks,
  toggleDone,
  handleDelete,
}: {
  tasks: Task[];
  toggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}) => {
  return (
    <div>
      <h2 className='px-2 pb-2 pt-1 text-xl font-bold'>Tasks</h2>
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
    </div>
  );
};

export default Tasks;
