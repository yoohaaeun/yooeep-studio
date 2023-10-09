import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to='/' className='w-28 sm:w-full xl:w-64 justify-self-center'>
      <img
        src='images/yooeep.png'
        alt='Yooeep Studio Logo'
        className='w-full relative bottom-3'
      />
    </Link>
  );
}
