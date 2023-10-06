import { useLocation } from 'react-router-dom';

export default function Collection() {
  const location = useLocation();

  return (
    <p
      className={`${
        location.pathname === '/'
          ? 'text-white border-white'
          : 'text-black border-black'
      } hover:border-b  transition-all duration-300 ease-in-out`}
    >
      Collection
    </p>
  );
}
