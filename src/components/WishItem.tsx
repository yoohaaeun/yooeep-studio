import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../api/firebase';
import useWishList from '../hooks/useWishList';
import { formatNumberWithCommas } from '../utils';
import ProductOptionModal from './ProductOptionModal';

interface WishItemProps {
  product: IProduct;
  selectedProducts: string[];
  handleProductSelect: (productId: string) => void;
}

export default function WishItem({
  product,
  selectedProducts,
  handleProductSelect,
}: WishItemProps) {
  const { id, image, title, price } = product;
  const { removeWishItem } = useWishList();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isSelected = selectedProducts.includes(id);
  const handleDelete = () => removeWishItem.mutate(id);
  const navigate = useNavigate();

  return (
    <>
      <li className='border-t border-black py-4 mb-2 text-xs sm:text-sm'>
        <div className='flex mb-8'>
          <img
            onClick={() => {
              navigate(`/product/${id}`, { state: { product } });
            }}
            className='w-24 mr-3 cursor-pointer'
            src={image}
            alt={title}
          />
          <div className='w-full h-32 flex justify-between  items-start'>
            <div className='font-semibold'>
              <p
                onClick={() => {
                  navigate(`/product/${id}`, { state: { product } });
                }}
                className='mb-0.5 cursor-pointer'
              >
                {title}
              </p>
              <p>
                KRW
                <span> {formatNumberWithCommas(price)}</span>
              </p>
            </div>
            <input
              type='checkbox'
              onChange={() => handleProductSelect(id)}
              checked={isSelected}
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div>
            <button
              onClick={handleDelete}
              className='py-1.5 px-2.5 mr-1 border border-black '
            >
              삭제
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className='py-1.5 px-2.5 border border-black'
            >
              장바구니담기
            </button>
          </div>
          <button
            onClick={() => alert('서비스 준비 중입니다. 조금만 기다려주세요.')}
            className='py-1.5 px-2.5 border border-black'
          >
            주문하기
          </button>
        </div>
      </li>
      {isModalOpen && (
        <ProductOptionModal product={product} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
}
