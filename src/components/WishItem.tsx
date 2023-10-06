import { IProduct } from '../api/firebase';
import useWishList from '../hooks/useWishList';
import { formatNumberWithCommas } from '../utils';

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
  const isSelected = selectedProducts.includes(id);
  const handleDelete = () => removeWishItem.mutate(id);

  return (
    <li className='border-t border-black py-4 mb-2 text-xs sm:text-sm'>
      <div className='flex mb-8'>
        <img className='w-24 mr-3' src={image} alt={title} />
        <div className='w-full h-32 flex justify-between  items-start'>
          <div className='font-semibold'>
            <p className='mb-0.5'>{title}</p>
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
          <button className='py-1.5 px-2.5 border border-black'>
            장바구니담기
          </button>
        </div>
        <button className='py-1.5 px-2.5 border border-black'>주문하기</button>
      </div>
    </li>
  );
}
