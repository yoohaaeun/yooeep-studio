export default function Footer() {
  return (
    <footer className='w-full h-28 md:h-40 flex justify-center items-center gap-2 border-t'>
      <a href='https://github.com/yoohaaeun/yooeep-studio'>
        <img
          src='images/transparent-yooeep.png'
          alt='Yooeep Logo'
          className='w-20'
        />
      </a>
      <p className='text-xs text-gray-500'>© 2023 Yooeep Studio.</p>
    </footer>
  );
}
