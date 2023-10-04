import { IProduct } from '../api/firebase';

interface CartItemProps {
  product: IProduct;
}

export default function CartItem({ product }: CartItemProps) {
  return (
    <li className='flex flex-row border-t border-black py-3 mb-2'>
      <img className='w-20 mr-3' src={product.image} alt={product.title} />
      <div className='w-full flex flex-row items-start justify-between'>
        <div>
          <p className='mb-0.5'>{product.title}</p>
          <p className='mb-2'>
            [옵션 : <span>32</span>]
          </p>
          <p className='mb-2'>
            KRW <span>185,000</span>
          </p>
          <p className='mb-2'>-</p>
          <div className='flex flex-row'>
            <div className='w-7 mr-2 pl-1 pb-1 border-b border-gray-500'>1</div>
            <button className='mr-3 text-gray-500'>+</button>
            <button className='text-gray-500'>-</button>
          </div>
        </div>
        <input type='checkbox' />
      </div>
    </li>
  );
}
