import { useQuery } from '@tanstack/react-query';
import { getProducts, IProduct } from '../api/firebase';
import ProductCard from './ProductCard';

export default function Products() {
  const { data: products } = useQuery<IProduct[]>(['products'], getProducts);

  return (
    <div className='w-full px-12 mb-20'>
      <ul className='grid grid-cols-productColumns gap-14'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
