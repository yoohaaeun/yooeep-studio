import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to='/' className='w-60'>
      <img
        src='images/yooeep.png'
        alt=''
        className='w-full relative bottom-3'
      />
    </Link>
  );
}
