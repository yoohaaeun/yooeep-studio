import { useState, useEffect } from 'react';

export default function About() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const backgroundImages = [
      '/images/bg-about-01.jpg',
      '/images/bg-about-02.jpg',
      '/images/bg-about-03.jpg',
      '/images/bg-about-04.jpg',
      '/images/bg-about-05.jpg',
    ];

    const randomImage =
      backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

    setBackgroundImage(randomImage);
  }, []);

  return (
    <section
      className='w-screen h-screen'
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='max-w-screen-xl min-h-screen pt-20 sm:pt-32 md:pt-40 mx-auto mb-20 sm:mb-14 px-6 sm:px-10'>
        <div className='w-full py-5 mb-11 md:mb-20 border-b border-black'>
          <h2 className='font-medium text-lg text-center uppercase'>about</h2>
        </div>

        <p className='px-10 sm:px-20 lg:px-40 text-xs sm:text-sm leading-5 sm:leading-6'>
          <span className='font-bold'>이미지 출처 정보</span>
          <br />
          Yooeep Studio에서 사용된 이미지는 Acne Studios로부터 가져왔으며, 원본
          이미지에 대한 모든 권리와 라이선스는 아크네 스튜디오 및 그 계열사에게
          속합니다. 이미지를 사용할 때 원저작자 및 저작권자의 권리를 존중하고,
          출처 정보를 확인하여 권리 및 라이선스를 준수하였습니다.
        </p>
      </div>
    </section>
  );
}
