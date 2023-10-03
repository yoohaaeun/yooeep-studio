import { useLocation } from 'react-router-dom';

export default function Collection() {
  const location = useLocation();

  return (
    <p
      className={`${
        location.pathname === '/' ? 'text-white' : 'text-black'
      } hover:border-b border-black transition-all duration-300 ease-in-out`}
    >
      Collection
    </p>
  );
}
