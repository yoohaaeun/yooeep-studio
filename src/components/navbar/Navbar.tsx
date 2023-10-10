import { useLocation } from 'react-router-dom';
import Shop from './Shop';
import Logo from './Logo';
import Account from './Account';
import Bag from './Bag';
import About from './About';

export default function Navbar() {
  const location = useLocation();

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-transparent z-10 ${
        location.pathname === '/' || location.pathname === '/about'
          ? ''
          : 'bg-gradient-to-b from-white'
      }`}
    >
      <nav className='grid grid-cols-navColumns gap-2 whitespace-nowrap px-2 sm:px-5 py-5 text-sm sm:text-base md:text-lg font-medium'>
        <Shop />
        <About />
        <Logo />
        <Account />
        <Bag />
      </nav>
    </header>
  );
}
