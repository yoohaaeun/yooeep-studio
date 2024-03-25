# Yooeep : a time for yourself 💛

Yooeep Studio는 최신 패션 트렌드를 탐색하고 스타일을 찾을 수 있는 온라인 쇼핑 플랫폼으로, 다양한 편의 기능과 옵션으로 온라인 쇼핑 경험을 제공합니다.

## Yooeep Studio 쇼핑몰 사이트

React와 Firebase를 활용하여 개발된 쇼핑몰 앱입니다. 사용자는 Google 계정으로 편리하게 가입할 수 있으며, 간편하게 위시리스트와 장바구니에 원하는 제품을 추가할 수 있습니다. 관리자는 실시간으로 구매 항목을 업데이트할 수 있습니다. 

### 주요 기능

- **로그인:** Firebase를 사용한 Google OAuth 로그인 구현
- **사용자 분기 처리:** 일반 사용자 및 관리자 사용자를 위한 사용자 분기 처리
- **인증:** 로그인 상태 확인을 통한 사용자 인증 구현
- **권한 부여:** 권한에 따른 기능 및 접근 권한 설정 (일반 사용자, 관리자)
- **Firebase 연동:** Google 로그인 및 실시간 데이터베이스 사용을 통한 Firebase 연동
- **Firebase API 활용:** CREATE (추가), READ (목록 및 상세 정보), UPDATE (수정), DELETE (삭제) API 사용 (useQuery 활용)
- **장바구니 기능:** 제품 추가 및 삭제 시 장바구니 수량 업데이트 및 수량 변경 시 총 주문 가격 업데이트
- **장바구니 항목 삭제:** 장바구니 내 상품 삭제 구현
- **관심상품 기능:** 사용자가 관심을 표시한 상품을 관리하며, 해당 상품을 삭제하거나 필요할 때 해당 상품을 바로 장바구니에 추가할 수 있는 기능을 구현
- **관리자 기능:** 제품 등록 및 이미지 업로드 (Cloudinary 활용, Firebase에 새 제품 추가)
- **반응형 UI:** 데스크톱, 태블릿, 모바일 지원을 위한 반응형 UI 구현
