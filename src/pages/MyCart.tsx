import { useQuery } from '@tanstack/react-query';
import { getCart, IProduct } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from '../components/CartStatus';
import CartItem from '../components/CartItem';
import EmptyCart from '../components/EmptyCart';
import { formatNumberWithCommas } from '../utils';

export default function MyCart() {
  const authContext = useAuthContext();
  const uid = authContext?.uid || '';

  const { isLoading, data: products } = useQuery<any, Error, IProduct[]>(
    ['carts'],
    () => getCart(uid),
    { enabled: !!uid }
  );

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + current.price * current.quantity,
      0
    );

  return (
    <section className='max-w-screen-xl min-h-screen mt-20 sm:mt-32 md:mt-40 mx-auto mb-20 sm:mb-14 px-6 sm:px-10'>
      <div className='w-full py-5 mb-11 md:mb-20 border-b border-black'>
        <h2 className='font-medium text-lg text-center uppercase'>
          BAG {hasProducts && <CartStatus />}
        </h2>
      </div>

      {!hasProducts && <EmptyCart />}

      {hasProducts && (
        <div className='px-3 py-6 md:p-9 lg:p-12 border border-black bg-white '>
          <ul className='text-xs sm:text-sm'>
            {products &&
              products.map((product) => {
                console.log('KEY', product.id);
                return (
                  <CartItem key={product.id} product={product} uid={uid} />
                );
              })}
          </ul>

          <div className='border-t py-6 border-black flex flex-row justify-between text-xs sm:text-sm'>
            <p>[기본배송]</p>
            <div className='text-end'>
              <p>
                상품구매금액
                <span className='font-bold'>
                  {formatNumberWithCommas(totalPrice!)}
                </span>
                + 배송비
                <span className='font-bold'>
                  {formatNumberWithCommas(0)} (무료)
                </span>
                =
              </p>
              <p className='mb-6 sm:mb-7'>
                합계 : KRW
                <span className='font-bold'>
                  {formatNumberWithCommas(totalPrice!)}
                </span>
              </p>
              <div>
                <button className='border border-black py-0.5 px-2.5 mr-1'>
                  전체선택
                </button>
                <button className='border border-black py-0.5 px-2.5'>
                  삭제하기
                </button>
              </div>
            </div>
          </div>

          <div className='border-t py-6 border-black text-xs'>
            <div className='flex flex-row justify-between mb-3'>
              <p>총 상품금액</p>
              <p>
                KRW
                <span className='font-bold'>
                  {formatNumberWithCommas(totalPrice!)}
                </span>
              </p>
            </div>

            <div className='flex flex-row justify-between  mb-3'>
              <p>총 배송비</p>
              <p>
                KRW
                <span className='font-bold'>{formatNumberWithCommas(0)}</span>
              </p>
            </div>

            <div className='flex flex-row justify-between'>
              <p>결제예정금액</p>
              <p>
                KRW
                <span className='font-bold'>
                  {formatNumberWithCommas(totalPrice!)}
                </span>
              </p>
            </div>
          </div>

          <button className='border border-black w-full py-2.5 mb-4 text-xs uppercase'>
            check out
          </button>

          <p className='text-xs text-gray-500'>
            할인 적용 금액은 주문서작성의 결제예정금액에서 확인 가능합니다.
          </p>
        </div>
      )}
    </section>
  );
}
