# 맥섬석GM(주) | Growfeed® 공식 웹사이트 소스코드

저메탄·고신뢰 축산바이오 전문기업 맥섬석GM(주) 공식 브랜드 웹사이트 및 축종별 실증 솔루션 웹 애플리케이션 소스코드 패키지입니다.

---

## 🚀 프로젝트 실행 방법 (Getting Started)

### 1. 패키지 설치
Node.js (v18 이상 권장) 환경에서 터미널을 열고 의존성 패키지를 설치합니다:
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```
기본적으로 브라우저에서 `http://localhost:3000`으로 접속하여 웹사이트를 확인할 수 있습니다.

### 3. 프로덕션 빌드
```bash
npm run build
```
빌드 완료 시 `dist/` 디렉터리에 배포용 정적 파일들이 생성됩니다.

---

## 📁 주요 디렉터리 구조

- **`src/`**
  - `components/`: 메인 홈 및 세부 뷰 컴포넌트
    - `HeroSection.tsx`: 상단 히어로 배너 및 슬로건
    - `ProductSection.tsx`: 축종별 대표 라인업 (소, 돼지, 닭, 오리 등)
    - `CategoryPageView.tsx`: 글로벌 실증 데이터, KFC 납품 실증, 메탄 저감 통계 등 상세 뷰
    - `OnlineInquirySection.tsx`: Formspree 연동 온라인 고객 문의 폼
    - `Header.tsx` / `Footer.tsx`: 공통 헤더/푸터 및 다국어(한국어/영어) 전환
  - `data/`: 회사 정보, 글로벌 지표, 실증 데이터
  - `types.ts`: TypeScript 인터페이스 및 타입 정의
  - `App.tsx`: 메인 라우팅 및 뷰 전환 컨트롤러
- **`public/`**: 고해상도 실증 이미지, 인증서, PDF 브로슈어 리소스

---

## 📩 온라인 문의 폼 연동 (Formspree)
온라인 문의 폼은 `https://formspree.io/f/mppqwzll` 엔드포인트와 연동되어 있어, 문의 제출 시 설정된 관리자 메일로 즉시 데이터가 전송됩니다.
