import Shop from './Shop';
import Collection from './Collection';
import Logo from './Logo';
import Account from './Account';
import Bag from './Bag';

export default function Navbar() {
  return (
    <header className='fixed top-0 left-0 w-full bg-transparent z-10'>
      <nav className='grid grid-cols-navColumns gap-2 whitespace-nowrap px-2 sm:px-5 py-5 text-sm sm:text-base md:text-lg font-medium'>
        <Shop />
        <Collection />
        <Logo />
        <Account />
        <Bag />
      </nav>
    </header>
  );
}
