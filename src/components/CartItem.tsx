import { addOrUpdateToCart, IProduct, removeFromCart } from '../api/firebase';
import { formatNumberWithCommas } from '../utils';

interface CartItemProps {
  product: IProduct;
  uid: string;
  selectedProducts: string[];
  handleProductSelect: (productId: string) => void;
}

export default function CartItem({
  product,
  uid,
  selectedProducts,
  handleProductSelect,
}: CartItemProps) {
  const { id, image, title, option, quantity, price } = product;

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };

  const handlePlus = () => {
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  };

  const isSelected = selectedProducts.includes(id);

  return (
    <li className='flex flex-row border-t border-black py-4 mb-2'>
      <img className='w-24 mr-3' src={image} alt={title} />
      <div className='w-full flex flex-row items-start justify-between'>
        <div>
          <p className='mb-0.5'>{product.title}</p>
          <p className='mb-2'>
            [옵션 : <span>{product.option}</span>]
          </p>
          <p className='mb-2'>
            KRW <span>{formatNumberWithCommas(price)}</span>
          </p>
          <p className='mb-2'>-</p>
          <div className='flex flex-row'>
            <div className='w-7 mr-2 pl-1 pb-1 border-b border-gray-500'>
              {quantity}
            </div>
            <button onClick={handlePlus} className='w-5 mr-2 text-gray-500'>
              +
            </button>
            <button onClick={handleMinus} className='w-5 text-gray-500'>
              -
            </button>
          </div>
        </div>
        <input
          type='checkbox'
          onChange={() => handleProductSelect(id)}
          checked={isSelected}
        />
      </div>
    </li>
  );
}
