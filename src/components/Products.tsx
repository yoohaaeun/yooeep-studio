import { useQuery } from '@tanstack/react-query';
import { getProducts, IProduct } from '../api/firebase';
import ProductCard from './ProductCard';

export default function Products({ lastPartOfPath }: any) {
  const { data: products } = useQuery<IProduct[]>(['products'], getProducts);

  const formattedCategory =
    lastPartOfPath.charAt(0).toUpperCase() + lastPartOfPath.slice(1);

  const filteredProducts = products
    ? products.filter((product) => product.category === formattedCategory)
    : [];

  return (
    <>
      <div className='w-full py-5 mb-11 md:mb-20 border-b border-black'>
        <h2 className='font-medium text-lg text-center uppercase'>
          {lastPartOfPath}
        </h2>
      </div>
      <div className='mb-20'>
        <ul className='grid grid-cols-productColumns gap-y-10'>
          {lastPartOfPath === 'new'
            ? products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : filteredProducts.length > 0 &&
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </ul>
      </div>
    </>
  );
}