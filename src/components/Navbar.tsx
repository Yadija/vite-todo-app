import { useContext } from 'react';
import { TbMoon, TbSunHigh } from 'react-icons/tb';

import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <nav className='fixed inset-x-0 top-0 flex justify-between px-5 py-3'>
      <h1 className='text-xl font-bold'>Todo App</h1>
      <section>
        <ul>
          <li className='cursor-pointer text-2xl'>
            <button onClick={toggle}>
              {mode === 'dark' ? <TbMoon /> : <TbSunHigh />}
            </button>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
