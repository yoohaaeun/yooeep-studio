import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function About() {
  const location = useLocation();

  return (
    <Link
      to='/about'
      className={`h-fit justify-self-start ${
        location.pathname === '/'
          ? 'text-white border-white'
          : 'text-black border-black'
      } hover:border-b  transition-all duration-300 ease-in-out`}
    >
      About
    </Link>
  );
}
