import { useState } from 'react';
import { IProduct } from '../api/firebase';
import useCart from '../hooks/useCart';
import { formatNumberWithCommas } from '../utils';
import ProductOptions from './ProductOptions';

import { AiOutlineClose } from 'react-icons/ai';

interface ProductOptionModalProps {
  product: IProduct;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductOptionModal({
  product,
  setIsModalOpen,
}: ProductOptionModalProps) {
  const { id, image, title, options, price } = product;
  const [selected, setSelected] = useState<string>(DEFAULT_OPTION);
  const { addOrUpdateCartItem } = useCart();

  const addToCart = () => {
    if (selected === null || selected === DEFAULT_OPTION) {
      alert('필수 옵션을 선택해주세요.');
    } else {
      alert('장바구니에 상품이 담겼습니다.');
      const product: IProduct = {
        id,
        image,
        title,
        price,
        option: selected,
        quantity: 1,
        options,
      };
      addOrUpdateCartItem.mutate(product);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(false)}
        className='w-screen h-screen fixed inset-0 bg-white bg-opacity-70 z-10'
      />
      <div className='w-72 sm:w-80 md:w-96 h-fit fixed inset-2/4 transform -translate-x-1/2 -translate-y-1/2 z-20 border border-black bg-white '>
        <div className='flex justify-between px-3 py-1 border-b border-black'>
          <p>옵션 선택</p>
          <button onClick={() => setIsModalOpen(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className='p-3'>
          <p className='mb-1 font-semibold'>{title}</p>
          <ProductOptions
            selected={selected}
            setSelected={setSelected}
            options={options}
          />
          <div className='pt-2 border-t border-gray-400'>
            <p className='font-semibold'>
              총상품금액 :
              <span className='text-sky-600'>
                {' '}
                KRW {formatNumberWithCommas(price)}
              </span>
            </p>
          </div>
        </div>
        <div className='flex gap-1 px-3 mb-3'>
          <button
            onClick={addToCart}
            className='w-full py-2 border border-black'
          >
            장바구니담기
          </button>
          <button
            className='w-full py-2 border border-black'
            onClick={() => setIsModalOpen(false)}
          >
            닫기
          </button>
        </div>
      </div>
    </>
  );
}

const DEFAULT_OPTION = '- [필수] Select Option -';
