import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

interface ProdcurtsProps {
  category: string;
}

export default function Products({ category }: ProdcurtsProps) {
  const {
    productsQuery: { data: products },
  } = useProducts();

  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const filteredProducts = products
    ? products.filter((product) => product.category === formattedCategory)
    : [];

  return (
    <>
      <div className='w-full py-5 mb-11 md:mb-20 border-b border-black'>
        <h2 className='font-medium text-lg text-center uppercase'>
          {category}
        </h2>
      </div>
      <div className='mb-20'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10'>
          {category === 'new'
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
