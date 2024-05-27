# Yooeep : a time for yourself 💛
[**Yooeep Studio 쇼핑몰**](https://yooeep-studio.netlify.app/) <br>
React와 Firebase를 활용하여 개발된 쇼핑몰 앱입니다. 사용자는 Google 계정으로 편리하게 가입할 수 있으며, 간편하게 위시리스트와 장바구니에 원하는 제품을 추가할 수 있습니다. 관리자는 실시간으로 구매 항목을 업데이트할 수 있습니다. 

<img width="1904" alt="yooeep-studio" src="https://github.com/yoohaaeun/yooeep-studio/assets/101792909/3bfe3abf-1517-4c2a-a4b2-dae6d88d5513">

<br>

## 주요기능
- **Firebase를 사용한 Google OAuth 로그인 구현**
    - Firebase Authentication을 통해 Google OAuth 로그인을 구현하여 사용자가 간편하게 Google 계정으로 가입/로그인할 수 있도록 하였습니다.
- **사용자 분기 처리**
    - 로그인 후, 일반 사용자와 관리자 사용자를 분기하여 각각에게 필요한 메뉴와 기능을 제공하고 Firebase Authentication의 권한 관리를 활용하여 사용자에 따라 동적 UI를 구성했습니다.
- **Cloudinary와 Firebase를 활용한 제품 관리 기능**
    - Cloudinary와 Firebase를 연동하여 제품 등록, 제품 이미지 업로드 등의 데이터를 관리했고 이를 바탕으로 효율적인 제품 관리 기능을 구현했습니다.
- **React Query를 활용한 데이터 관리**
    - React Query의 `useQuery`와 `useMutation` 훅을 사용하여 API 호출과 데이터 상태 관리를 간편하게 처리하여 데이터 관리를 최적화했습니다.
- **테일윈드를 활용한 스타일링**
    - 테일윈드 CSS 프레임워크를 이용하여 앱 전반에 일관된 디자인을 구현했고, 이미 잘 갖추어진 테일윈드 디자인 시스템을 이용해 빠르게 스타일을 적용하고 통일된 UI를 유지했습니다.
- **반응형 UI 구현**
    - 미디어 쿼리와 Flexbox, Grid를 활용하여 다양한 디바이스에서 동작하는 반응형 UI를 구현하여, 사용자에게 일관된 경험을 제공했습니다.

<br>

## 기술 스택
- TypeScript
- React
- React-query
- Tailwind CSS
- Firebase
- Cloudinary
- Netlify
