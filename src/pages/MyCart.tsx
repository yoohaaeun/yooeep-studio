import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from '../components/CartStatus';

export default function MyCart() {
  const authContext = useAuthContext();
  const uid = authContext?.uid || '';

  const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;

  return (
    <section className='max-w-screen-xl min-h-screen mt-20 sm:mt-32 md:mt-40 mx-auto px-10'>
      <div className='w-full py-5 mb-11 md:mb-20 border-b border-black'>
        <h2 className='font-medium text-lg text-center uppercase'>
          BAG {hasProducts && <CartStatus />}
        </h2>
      </div>

      {!hasProducts && (
        <div className='py-9 sm:p-14 lg:p-20 border border-black bg-white '>
          <p className='text-center text-xs'>장바구니가 비어 있습니다.</p>
        </div>
      )}

      {hasProducts && <></>}
    </section>
  );
}
