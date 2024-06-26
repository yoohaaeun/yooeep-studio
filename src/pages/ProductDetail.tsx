import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IProduct } from '../api/firebase';
import ProductOptions from '../components/ProductOptions';
import { useAuthContext } from '../context/AuthContext';
import useCart from '../hooks/useCart';
import useWishList from '../hooks/useWishList';
import { formatNumberWithCommas } from '../utils';
import { BsBalloonHeart, BsBalloonHeartFill } from 'react-icons/bs';

export default function ProductDetail() {
  const authContext = useAuthContext();
  const { user, login } = authContext || {};
  const { addOrUpdateCartItem } = useCart();
  const { isInWishList, addWishItem, removeWishItem } = useWishList();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState<string>(DEFAULT_OPTION);

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
    }
  };

  const addToWishList = () => {
    if (isInWishList(id)) {
      alert('관심상품 등록이 취소되었습니다.');
      removeWishItem.mutate(id);
    } else {
      alert('관심상품으로 등록되었습니다.');
      const product: IProduct = {
        id,
        image,
        title,
        price,
        option: selected,
        quantity: 1,
        options,
      };
      addWishItem.mutate(product);
    }
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
        <ProductOptions
          selected={selected}
          setSelected={setSelected}
          options={options}
        />
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
              className='h-11 px-3 border border-black hover:bg-white transition duration-300 text-base'
            >
              {isInWishList(id) ? <BsBalloonHeartFill /> : <BsBalloonHeart />}
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
