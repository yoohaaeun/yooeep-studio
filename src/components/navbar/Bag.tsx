import { Link, useLocation } from 'react-router-dom';

export default function Bag() {
  const location = useLocation();

  return (
    <Link
      to='/carts'
      className={`${
        location.pathname === '/' ? 'text-white' : 'text-black'
      } hover:border-b transition-all duration-300 ease-in-out`}
    >
      Bag
    </Link>
  );
}
