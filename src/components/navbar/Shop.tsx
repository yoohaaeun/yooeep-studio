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
      className={`relative  ${
        location.pathname === '/' ? 'text-white' : 'text-black'
      } hover:border-b transition-all duration-300 ease-in-out`}
    >
      Shop
      <AnimatePresence>
        {isHovered && (
          <motion.ul
            variants={dropdownVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='absolute py-5  text-xs leading-6 whitespace-nowrap cursor-pointer'
          >
            <motion.li>
              <Link to='/products'>New</Link>
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
  );
}
