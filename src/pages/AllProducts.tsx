import React from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../components/Products';

export default function AllProducts() {
  const location = useLocation();
  const lastPartOfPath = location.pathname.split('/').pop();

  return (
    <section className='max-w-screen-xl mt-20 sm:mt-32 md:mt-40 mx-auto px-10'>
      <Products lastPartOfPath={lastPartOfPath} />
    </section>
  );
}
