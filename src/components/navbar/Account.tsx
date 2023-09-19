import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { login, logout, onUserStateChange } from '../../api/firebase';
import { dropdownVariants } from '../../utils';

export default function Account() {
  const [user, setUser] = useState<any>();
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        location.pathname === '/' ? 'text-white' : 'text-black'
      } hover:border-b transition-all duration-300 ease-in-out`}
    >
      Account
      <AnimatePresence>
        {isHovered && (
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
  );
}
