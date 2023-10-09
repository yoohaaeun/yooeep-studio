import { Link, useLocation } from 'react-router-dom';
import CartStatus from '../CartStatus';

export default function Bag() {
  const location = useLocation();

  return (
    <Link
      to='/carts'
      className={`h-fit justify-self-end ${
        location.pathname === '/'
          ? 'text-white border-white'
          : 'text-black border-black'
      } hover:border-b  transition-all duration-300 ease-in-out`}
    >
      Bag
      <CartStatus />
    </Link>
  );
}
