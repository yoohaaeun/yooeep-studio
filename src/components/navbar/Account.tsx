import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { login, logout, onUserStateChange } from '../../api/firebase';
import { dropdownVariants } from '../../utils';
import { Link } from 'react-router-dom';

interface IUser {
  displayName: string;
  isAdmin: boolean;
}

export default function Account() {
  const [user, setUser] = useState<IUser>();
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

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
            {user && <motion.li>Hi! {user.displayName} 👋🏻</motion.li>}
            {!user && <motion.li onClick={login}>Login</motion.li>}
            <motion.li>Wish List</motion.li>
            {user && <motion.li onClick={logout}>Logout</motion.li>}
            {user?.isAdmin && (
              <motion.li>
                <Link to='/products/new'>제품 등록</Link>
              </motion.li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
