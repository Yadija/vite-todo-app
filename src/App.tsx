function App() {
  return (
    <div className='dark'>
      <div className='h-screen w-full bg-softPeach text-funBLue dark:bg-balticSea dark:text-denimBLue'>
        <nav className='fixed left-0 right-0 top-0 flex justify-between px-5 py-3'>
          <h1 className='font-bold'>Todo App</h1>
          <div>
            <ul>
              <li>Mode</li>
            </ul>
          </div>
        </nav>
        <div className='flex flex-col justify-center px-8 pt-20 sm:m-auto sm:w-[640px]'>
          {/* input */}
          <form className='flex gap-4 pb-6'>
            <input
              type='text'
              className='w-full px-4 py-2 dark:bg-softPeach dark:text-balticSea'
              placeholder='Add...'
            />
            <button className='bg-funBLue px-4 py-2 font-bold text-softPeach dark:bg-denimBLue dark:text-balticSea'>
              Add
            </button>
          </form>

          {/* search */}
          <div className='mb-6'>
            <input
              type='text'
              className='w-full px-4 py-2 dark:bg-softPeach  dark:text-balticSea'
              placeholder='Search...'
            />
          </div>

          {/* tasks */}
          <div>
            <h2 className='px-2 pb-2 pt-1 text-xl font-bold'>Tasks</h2>
            <ul className='flex flex-col gap-2'>
              <li>
                <div className='flex justify-between'>
                  <div className='flex w-full gap-4 bg-funBLue px-3 py-2 text-softPeach dark:bg-denimBLue dark:text-balticSea'>
                    <input type='checkbox' />
                    <p>Task 1</p>
                  </div>
                  <div className='bg-white p-2 text-funBLue dark:bg-softPeach dark:text-balticSea'>
                    delete
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
