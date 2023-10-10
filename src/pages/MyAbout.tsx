export default function About() {
  return (
    <section
      className='w-screen h-screen'
      style={{
        backgroundImage: "url('/images/main2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='max-w-screen-xl min-h-screen pt-20 sm:pt-32 md:pt-40 mx-auto mb-20 sm:mb-14 px-6 sm:px-10'>
        <div className='w-full py-5 mb-11 md:mb-20 border-b border-black'>
          <h2 className='font-medium text-lg text-center uppercase'>about</h2>
        </div>

        <p className='px-10 sm:px-20 lg:px-40 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-300'>
          <span className='font-bold'>이미지 출처 정보</span>
          <br />
          Yooeep Studio에서 사용된 이미지는 Acne Studios의 제품, 디자인, 및
          아트워크로부터 가져왔습니다. 이러한 이미지는 Acne Studios와 관련된
          아티스트 및 디자이너들의 창작물이며, 아크네 스튜디오의 공식
          웹사이트에서 사용되는 것입니다. 이미지를 사용함에 있어서,
          유잎스튜디오는 이러한 이미지를 비상업적 목적으로만 사용하였으며,
          원저작자 및 저작권자의 권리를 존중하고자 합니다. 이미지는 원본 소유자
          또는 라이선스 보유자의 소유물이며, 여기서는 그저 시각적인 목적으로
          사용되었습니다. 원본 이미지에 대한 모든 권리와 라이선스는 아크네
          스튜디오 및 그 계열사에게 속하며, 해당 권리를 침해하지 않기 위해
          이미지를 사용할 때 주의를 기울였습니다. 이미지를 복제하거나 게시하는
          경우, 반드시 원본 출처를 확인하고 관련 권리 및 라이선스를 준수해야
          합니다. 이 출처 정보는 저희 사이트의 투명성을 유지하고 이미지 사용에
          대한 권리를 존중하기 위한 것입니다.
        </p>
      </div>
    </section>
  );
}
