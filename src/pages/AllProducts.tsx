import React from 'react';
import Products from '../components/Products';

export default function AllProducts() {
  return (
    <section className='max-w-screen-xl mt-20 sm:mt-32 md:mt-40 mx-auto'>
      <div className='w-full py-5 mb-20 border-b border-black '>
        <h2 className='font-medium text-lg text-center uppercase'>new</h2>
      </div>
      <Products />
    </section>
  );
}
