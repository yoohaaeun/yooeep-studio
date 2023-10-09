import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { dropdownVariants } from '../../utils';

export default function Shop() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

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
      className={`h-fit justify-self-start ${
        location.pathname === '/'
          ? 'text-white border-white'
          : 'text-black border-black'
      } hover:border-b  transition-all duration-300 ease-in-out`}
    >
      Shop
      <AnimatePresence>
        {isHovered && (
          <motion.ul
            variants={dropdownVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='absolute py-5 text-xs leading-6 whitespace-nowrap cursor-pointer'
          >
            <motion.li>
              <Link to='/category/new'>New</Link>
            </motion.li>
            <motion.li>
              <Link to='/category/outer'>Outer</Link>
            </motion.li>
            <motion.li>
              <Link to='/category/knitwear'>Knitwear</Link>
            </motion.li>
            <motion.li>
              <Link to='/category/top'>Top</Link>
            </motion.li>
            <motion.li>
              <Link to='/category/dresses'>Dresses</Link>
            </motion.li>
            <motion.li>
              <Link to='/category/Shoes'>Shoes</Link>
            </motion.li>
            <motion.li>
              <Link to='/category/accessories'>Accessories</Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
