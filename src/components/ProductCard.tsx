import { useNavigate } from 'react-router-dom';
import { IProduct } from '../api/firebase';
import { formatNumberWithCommas } from '../utils';

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, category, image, price, title } = product;
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/product/${id}`, { state: { product } });
      }}
      className='flex flex-col px-10 text-xs font-medium cursor-pointer'
    >
      <img src={image} alt={title} />
      <div className='flex justify-between py-3 border-b border-black'>
        <h3 className='w-6/12 '>{title}</h3>
        <p>₩{formatNumberWithCommas(price)}</p>
      </div>
      <p className='py-3'>{category}</p>
    </li>
  );
}
