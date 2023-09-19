import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { login, logout, onUserStateChange } from '../api/firebase';

const dropdownVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
    },
  },
};

export default function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState<any>();
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isAccountHovered, setIsAccountHovered] = useState(false);

  useEffect(() => {
    onUserStateChange((user: any) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  const handleMouseEnter = (menuType: string) => {
    if (menuType === 'shop') {
      setIsShopHovered(true);
      setIsAccountHovered(false);
    } else if (menuType === 'account') {
      setIsAccountHovered(true);
      setIsShopHovered(false);
    }
  };

  const handleMouseLeave = () => {
    setIsShopHovered(false);
    setIsAccountHovered(false);
  };

  return (
    <header className='fixed top-0 left-0 w-full bg-transparent z-10'>
      <nav className='flex justify-between items-start p-5 font-medium'>
        <div
          onMouseEnter={() => handleMouseEnter('shop')}
          onMouseLeave={handleMouseLeave}
          className={`relative  ${
            location.pathname === '/' ? 'text-white' : 'text-black'
          } hover:border-b transition-all duration-300 ease-in-out`}
        >
          Shop
          <AnimatePresence>
            {isShopHovered && (
              <motion.ul
                variants={dropdownVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                className='absolute py-5  text-xs leading-6 whitespace-nowrap cursor-pointer'
              >
                <motion.li>
                  <Link to='/products/new'>New </Link>
                </motion.li>
                <motion.li>Outerwear</motion.li>
                <motion.li>Knitwear</motion.li>
                <motion.li>Tops</motion.li>
                <motion.li>Dresses</motion.li>
                <motion.li>Accessories</motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <p
          className={`${
            location.pathname === '/' ? 'text-white' : 'text-black'
          } hover:border-b transition-all duration-300 ease-in-out`}
        >
          Collection
        </p>
        <Link to='/' className='w-60'>
          <img
            src='images/yooeep.png'
            alt=''
            className='w-full relative bottom-3'
          />
        </Link>
        <div
          onMouseEnter={() => handleMouseEnter('account')}
          onMouseLeave={handleMouseLeave}
          className={`${
            location.pathname === '/' ? 'text-white' : 'text-black'
          } hover:border-b transition-all duration-300 ease-in-out`}
        >
          Account
          <AnimatePresence>
            {isAccountHovered && (
              <motion.ul
                variants={dropdownVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                className='absolute py-5  text-xs leading-6 whitespace-nowrap cursor-pointer'
              >
                {!user && <motion.li onClick={handleLogin}>Login</motion.li>}
                {user && <motion.li onClick={handleLogout}>Logout</motion.li>}
                <motion.li>My Page</motion.li>
                <motion.li>Wish List</motion.li>
                <motion.li>제품 등록</motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <Link
          to='/carts'
          className={`${
            location.pathname === '/' ? 'text-white' : 'text-black'
          } hover:border-b transition-all duration-300 ease-in-out`}
        >
          Bag
        </Link>
      </nav>
    </header>
  );
}
