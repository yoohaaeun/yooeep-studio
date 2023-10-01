import React from 'react';
import { IProduct } from '../api/firebase';

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, category, description, image, options, price, title } = product;

  return (
    <li>
      <img src={image} alt={title}></img>
      <div>
        <h3>{title}</h3>
        <p>₩{price}</p>
      </div>
    </li>
  );
}
