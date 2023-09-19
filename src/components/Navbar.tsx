import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isOvered, setHovered] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <header className='fixed top-0 left-0 w-full bg-transparent z-10'>
      <nav className='flex justify-between items-start p-5 font-medium'>
        <Link
          to='/products'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative  ${
            location.pathname === '/' ? 'text-white' : 'text-black'
          } hover:border-b transition-all duration-300 ease-in-out`}
        >
          Shop
          <AnimatePresence>
            {isOvered && (
              <motion.ul
                variants={dropdownVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                className='absolute py-5  text-xs leading-6 whitespace-nowrap'
              >
                <Link to='/products/new'>
                  <motion.li>New</motion.li>
                </Link>
                <motion.li>Outerwear</motion.li>
                <motion.li>Knitwear</motion.li>
                <motion.li>Top</motion.li>
                <motion.li>Dresses</motion.li>
                <motion.li>Accessories</motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </Link>
        <p
          className={`${
            location.pathname === '/' ? 'text-white' : 'text-black'
          }`}
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
        <button
          className={`${
            location.pathname === '/' ? 'text-white' : 'text-black'
          }`}
        >
          Login
        </button>
        <Link
          to='/carts'
          className={`${
            location.pathname === '/' ? 'text-white' : 'text-black'
          }`}
        >
          Bag
        </Link>
      </nav>
    </header>
  );
}
