import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { dropdownVariants } from '../../utils';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function Account() {
  const authContext = useAuthContext();
  const { user, login, logout } = authContext || {};

  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

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
      } hover:border-b border-black transition-all duration-300 ease-in-out`}
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
            {user && (
              <motion.li>
                {user.isAdmin ? 'Hi Admin 😋' : `Hi! ${user.displayName} 👋🏻`}
              </motion.li>
            )}
            {!user && <motion.li onClick={login}>Login</motion.li>}
            {user && <motion.li>Wish List</motion.li>}
            {user?.isAdmin && (
              <motion.li>
                <Link to='/products/new'>제품 등록</Link>
              </motion.li>
            )}
            {user && <motion.li onClick={logout}>Logout</motion.li>}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
