import React from 'react';
import { IProduct } from '../api/firebase';
import { formatNumberWithCommas } from '../utils';

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, category, description, image, options, price, title } = product;

  return (
    <li className='flex flex-col px-10 text-xs font-medium'>
      <img src={image} alt={title} />
      <div className='flex justify-between py-3 border-b border-black'>
        <h3 className='w-6/12 '>{title}</h3>
        <p>₩{formatNumberWithCommas(price)}</p>
      </div>
      <p className='py-3'>{category}</p>
    </li>
  );
}
