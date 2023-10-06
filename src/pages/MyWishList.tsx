import React, { useState } from 'react';
import WishItem from '../components/WishItem';
import useWishList from '../hooks/useWishList';

export default function MyWishList() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const { removeWishItem } = useWishList();

  const {
    wishListQuery: { isLoading, data: products },
  } = useWishList();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;

  const handleProductSelect = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((id) => id !== productId)
      );
    } else {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    }
  };

  const handleDeleteSelectedProducts = () => {
    selectedProducts.forEach((productId) => {
      removeWishItem.mutate(productId);
    });
    setSelectedProducts([]);
  };

  return (
    <section className='max-w-screen-xl min-h-screen mt-20 sm:mt-32 md:mt-40 mx-auto mb-20 sm:mb-14 px-6 sm:px-10'>
      <div className='w-full py-5 mb-11 md:mb-20 border-b border-black'>
        <h2 className='font-medium text-lg text-center uppercase'>WishList</h2>
      </div>

      {!hasProducts && (
        <div className='py-4 border-t border-black text-center text-xs sm:text-sm'>
          관심 상품 내역이 없습니다.
        </div>
      )}

      {hasProducts && (
        <>
          <ul className='text-xs sm:text-sm'>
            {products &&
              products.map((product) => {
                return (
                  <WishItem
                    key={product.id}
                    product={product}
                    handleProductSelect={handleProductSelect}
                    selectedProducts={selectedProducts}
                  />
                );
              })}
          </ul>
          <div className='border-t border-black py-4 mb-2 text-xs sm:text-sm'>
            <button
              onClick={handleDeleteSelectedProducts}
              className='py-1 px-2.5 mr-1 border border-black'
            >
              선택삭제
            </button>
          </div>
          <div className='py-3 border border-black text-center text-xs sm:text-sm'>
            전체상품주문
          </div>
        </>
      )}
    </section>
  );
}
