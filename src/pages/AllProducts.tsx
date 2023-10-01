import React from 'react';
import Products from '../components/Products';

export default function AllProducts() {
  return (
    <div className='mx-auto my-40 max-w-screen-2xl bg-red-100'>
      <div className='py-5 mb-20 border-b border-black '>
        <h2 className='font-medium text-lg text-center uppercase'>new</h2>
      </div>
      <Products />
    </div>
  );
}
