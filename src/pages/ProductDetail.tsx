import { ChangeEvent, MouseEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IProduct } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import useCart from '../hooks/useCart';
import useWishList from '../hooks/useWishList';
import { formatNumberWithCommas } from '../utils';

export default function ProductDetail() {
  const authContext = useAuthContext();
  const { user, login } = authContext || {};
  const { addOrUpdateCartItem } = useCart();
  const { addWishItem } = useWishList();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState<string>(DEFAULT_OPTION);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelected(e.target.value);

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
      };
      addOrUpdateCartItem.mutate(product);
    }
  };

  const addToWishList = (e: MouseEvent<HTMLButtonElement>) => {
    alert('관심상품으로 등록되었습니다.');
    const product: IProduct = {
      id,
      image,
      title,
      price,
      option: selected,
      quantity: 1,
    };
    addWishItem.mutate(product);
  };

  return (
    <section className='max-w-screen-xl min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 sm:mt-32 md:mt-40 mb-20 mx-auto px-16'>
      <img className='w-full' src={image} alt={title} />
      <div>
        <h3 className='font-medium pb-1'>{title}</h3>
        <p className='pb-2 mb-8 border-b border-black text-sm font-medium'>
          {category}
        </p>
        <p className='w-4/6 text-sm mb-8'>{description}</p>
        <p className='text-sm mb-8 font-bold'>
          KRW {formatNumberWithCommas(price)}
        </p>
        <div className='flex flex-col mb-8'>
          <label className='text-sm font-medium text-gray-400 mb-2'>SIZE</label>
          <select
            id='select'
            className='w-1/2 py-2.5 px-1 flex-1 border border-black outline-none bg-transparent cursor-pointer'
            onChange={handleSelect}
            value={selected}
          >
            <option disabled>{DEFAULT_OPTION}</option>
            {options &&
              options.map((option: string, index: number) => (
                <option key={index}>{option}</option>
              ))}
          </select>
        </div>
        {user ? (
          <div className='flex gap-1'>
            <button
              onClick={addToCart}
              className='w-full h-11 border border-black text-sm uppercase hover:bg-white transition duration-300'
            >
              add to cart
            </button>
            <button
              onClick={addToWishList}
              className='h-11 px-3 border border-black hover:bg-white transition duration-300'
            >
              🤍
            </button>
          </div>
        ) : (
          <button
            onClick={login}
            className='w-full h-11 border border-black text-sm uppercase hover:bg-white transition duration-300'
          >
            Please Login to add the product in to cart
          </button>
        )}
      </div>
    </section>
  );
}

const DEFAULT_OPTION = '- [필수] Select Option -';
