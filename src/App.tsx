import { FormEvent, KeyboardEvent } from 'react';

import Input from './components/Input';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Tasks from './components/Tasks';
import { Task } from './interface/Task';

function App() {
  const tasks: Task[] = [
    { name: 'First Task', id: '1', done: false },
    { name: 'Second Task', id: '2', done: false },
    { name: 'Third Task', id: '3', done: true },
  ];
  const query = 'query';

  const handleSubmit = (event: FormEvent<HTMLFormElement>, value: string) => {
    event.preventDefault();

    console.log(value);
  };

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log((event.target as HTMLInputElement).value);
    console.log(query);
  };

  const toggleDoneTask = (id: string, done: boolean) => {
    console.log(id, done);
  };

  const handleDeleteTask = (id: string) => {
    console.log(id);
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
          />
        </section>
      </div>
    </div>
  );
}

export default App;
