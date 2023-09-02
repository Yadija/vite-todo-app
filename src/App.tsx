import { FormEvent, KeyboardEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Input from './components/Input';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Tasks from './components/Tasks';
import { Task } from './interface/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>, value: string) => {
    event.preventDefault();

    const newTask = {
      name: value,
      done: false,
      id: uuidv4(),
    };

    setTasks((tasks) => [...tasks, newTask]);
  };

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    setQuery((event.target as HTMLInputElement).value);
  };

  const toggleDoneTask = (id: string, done: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          task.done = done;
        }

        return task;
      }),
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='dark'>
      <div className='h-screen w-full bg-softPeach text-funBLue dark:bg-balticSea dark:text-denimBLue'>
        <Navbar />
        <section className='flex flex-col justify-center px-8 pt-20 sm:m-auto sm:w-[640px]'>
          <Input handleSubmit={handleSubmit} />
          <Search handleSearch={handleSearch} />
          <Tasks
            tasks={tasks}
            toggleDone={toggleDoneTask}
            handleDelete={handleDeleteTask}
            query={query}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
