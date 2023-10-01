import { useQuery } from '@tanstack/react-query';
import { getProducts, IProduct } from '../api/firebase';
import ProductCard from './ProductCard';

export default function Products() {
  const { data: products } = useQuery<IProduct[]>(['products'], getProducts);

  return (
    <div className='bg-red-50'>
      <ul className='grid grid-cols-3'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
