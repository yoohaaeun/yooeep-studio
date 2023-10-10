export default function NotFound() {
  return (
    <section
      className='w-screen h-screen flex justify-center items-center'
      style={{
        backgroundImage: "url('/images/bg-404.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='text-center'>
        <button>
          <a href='/'>
            <img
              src='images/transparent-yooeep.png'
              alt='Yooeep Logo'
              className='w-72 sm:w-96'
            />
          </a>
        </button>
        <p className='mt-5 font-bold text-xs sm:text-sm text-gray-900'>
          죄송합니다. 해당 페이지를 찾을 수 없습니다. <br />
          홈페이지로 이동해 주세요.
        </p>
      </div>
    </section>
  );
}
