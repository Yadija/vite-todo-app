import { TbMoon, TbSunHigh } from 'react-icons/tb';

const Navbar = () => {
  return (
    <nav className='fixed inset-x-0 top-0 flex justify-between px-5 py-3'>
      <h1 className='text-xl font-bold'>Todo App</h1>
      <section>
        <ul>
          <li className='cursor-pointer text-2xl'>
            <TbMoon />
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
