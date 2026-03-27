# 프로젝트: Landing Page Templates — 포트폴리오 데모

## 개요
다양한 업종별 고품질 랜딩 페이지 템플릿 쇼케이스를 만들어주세요. 이것은 Upwork/Fiverr에서 "랜딩 페이지 제작" 기그로 수주할 때 클라이언트에게 "이런 퀄리티로 만들어 드립니다"를 직접 보여주는 포트폴리오입니다. 각 템플릿은 실제 납품 가능한 프로덕션 수준이어야 합니다.

## 중요한 맥락
- 이것은 **포트폴리오 쇼케이스**입니다 — 외부 API 없이 프론트엔드만으로 완결
- 저는 풀스택 AI 개발자이며, "48시간 내 랜딩페이지 납품" 서비스를 판매할 예정입니다
- Vercel에 배포하고, 포트폴리오 사이트에서 링크할 예정입니다
- **배포 도메인**: `landing-templates.vercel.app` (또는 유사한 이름으로 Vercel 프로젝트 생성)
- **영어 버전만** 만들어주세요 (다국어 불필요)
- 별도 백엔드/DB 불필요 — 순수 프론트엔드 프로젝트
- 모든 외부 링크(movatech.org/contact 등)는 실제 존재하는 페이지여야 함 — 배포 전 링크 검증 필요

---

## 기술 스택 (반드시 사용)
- **프레임워크**: Next.js 14+ (App Router)
- **스타일링**: Tailwind CSS
- **애니메이션**: Framer Motion (부드러운 스크롤 애니메이션, 호버 효과)
- **아이콘**: Lucide React
- **폰트**: Google Fonts (각 템플릿마다 다른 폰트 조합)
- **배포**: Vercel 배포 가능한 형태로

---

## 핵심 구조

### 메인 갤러리 페이지 (`/`)
모든 템플릿을 한눈에 보여주는 쇼케이스 갤러리 페이지. 이 페이지 자체도 인상적이어야 합니다.

**디자인 컨셉: "디자인 에이전시 포트폴리오"**
- 배경: 오프화이트/크림(#fafaf9) 위에 세련된 타이포그래피
- 폰트: "Instrument Serif" (헤딩) + "Inter" (본문) 조합
- 느낌: 미니멀하고 고급스러운 디자인 스튜디오

포함 사항:
- 히어로: "Landing Pages That Convert" + "Professionally crafted, delivered in 48 hours" 서브타이틀
- 필터/카테고리 태그 바: All / SaaS / Restaurant / Fitness / Real Estate
- 템플릿 프리뷰 카드 그리드 (2~3열)
  - 각 카드: **CSS 미니 프리뷰 렌더링** (각 템플릿의 색상/폰트/레이아웃을 축소 재현한 미니어처 — 스크린샷 이미지 대신 실제 HTML/CSS로 구현) + 템플릿 이름 + 업종 태그 + "View Demo" 버튼
  - 호버 시 카드 살짝 확대 + 그림자 강화 애니메이션
- 하단 CTA 섹션: "Need a custom landing page?" + "Let's talk" 버튼 (movatech.org/contact 링크)
- 푸터: "Built by MyeongSub Kim / MOVA Tech" + GitHub, movatech.org 링크

### 개별 템플릿 페이지
각 템플릿은 `/templates/[slug]` 라우트로 풀페이지 렌더링. 상단에 "← Back to Gallery" 내비게이션 + "이 템플릿의 특징" 오버레이 토글 버튼 포함.

---

## 템플릿 4종 — 각각 완전히 다른 디자인

### 매우 중요한 디자인 원칙
4개의 템플릿은 각각 **완전히 다른 색상, 폰트, 레이아웃, 분위기**를 가져야 합니다. 같은 사람이 만들었다고 느껴지지 않을 정도로 다양해야 합니다. 클라이언트가 "이 사람은 어떤 스타일이든 만들 수 있구나"라고 느끼게 하는 것이 목표입니다.

---

### 템플릿 1: SaaS 프로덕트 (`/templates/saas`)
**디자인 방향: 모던 다크 테크**
- 색상: 다크 배경(#09090b) + 바이올렛 액센트(#8b5cf6) + 화이트 텍스트
- 폰트: "Space Grotesk" (헤딩) + "DM Sans" (본문)
- 느낌: Linear, Vercel, Raycast 스타일의 모던 개발자 도구 느낌
- 배경 효과: 서브틀한 그리드 패턴 + 글로우 그래디언트 오브

포함 섹션:
1. **히어로**: 큰 헤드라인 + 서브 카피 + "Start Free Trial" / "Watch Demo" 듀얼 CTA + 아래에 프로덕트 목업 스크린샷 (CSS로 가상의 대시보드 UI 생성)
2. **로고 배너**: "Trusted by 500+ teams" + 가상의 회사 로고 5~6개 (텍스트 기반 로고로 생성)
3. **기능 3열 그리드**: 아이콘 + 제목 + 설명 (6개 기능)
4. **프로덕트 스크린샷 섹션**: 탭 전환 가능한 3가지 기능 프리뷰 (탭 클릭 시 다른 목업 화면 표시)
5. **가격표**: 3단계 가격 카드 (Free / Pro / Enterprise) + "Most Popular" 배지
6. **고객 후기**: 3개 카드 (가상의 리뷰, 프로필 이미지는 이니셜 아바타로)
7. **FAQ**: 아코디언 형태 5~6개 질문/답변
8. **CTA 섹션**: "Ready to get started?" + 이메일 입력 필드 + CTA 버튼
9. **푸터**: 4열 링크 그리드 + 소셜 아이콘

---

### 템플릿 2: 레스토랑 / 카페 (`/templates/restaurant`)
**디자인 방향: 따뜻하고 고급스러운 다이닝**
- 색상: 크림 배경(#fef7ed) + 딥 그린(#1a3a2a) + 골드 액센트(#c8a55a)
- 폰트: "Playfair Display" (헤딩 — 세리프) + "Lato" (본문)
- 느낌: 고급 레스토랑, 미슐랭 가이드에 나올 법한 분위기
- 이미지 대신: CSS 일러스트레이션이나 이모지 + 타이포그래피로 고급감 표현

포함 섹션:
1. **히어로**: 전체 화면, 큰 세리프 타이틀 "A Taste of Perfection" + 섬세한 장식 보더 + "Reserve a Table" CTA
2. **소개**: "Our Story" 텍스트 + 레스토랑 철학 (2열 레이아웃)
3. **메뉴 프리뷰**: 카테고리 탭(Appetizers / Mains / Desserts) + 메뉴 아이템 리스트 (이름 + 설명 + 가격) — 클래식한 메뉴 카드 스타일
4. **특별한 경험**: 3개 카드 (Private Dining / Wine Pairing / Chef's Table) — 골드 보더 강조
5. **갤러리 섹션**: CSS로 만든 우아한 그리드 레이아웃 (그래디언트 색상 블록 + 이모지 아이콘으로 음식 표현)
6. **예약 폼**: 날짜 + 시간 + 인원 + 이름 + 연락처 입력 폼 (실제 전송은 안 함 — 버튼 클릭 시 성공 모달만)
7. **영업 정보**: 주소 + 영업 시간 + 연락처 (2열)
8. **푸터**: 미니멀, 로고 + SNS 링크

---

### 템플릿 3: 피트니스 / 짐 (`/templates/fitness`)
**디자인 방향: 에너지 넘치는 볼드 스포츠**
- 색상: 블랙(#000000) + 네온 그린(#39ff14) + 화이트
  - ⚠️ 기존 포트폴리오 사이트의 accent 컬러(#c8f542 라임)와 겹치지 않도록 네온 그린 계열로 차별화
- 폰트: "Oswald" (헤딩 — 올캡스, 볼드) + "Roboto" (본문)
- 느낌: Nike, CrossFit, Under Armour 스타일 — 강렬하고 에너지 넘치는
- 특수 효과: 대각선 섹션 구분, 볼드한 타이포그래피, 패럴랙스 스크롤 느낌

포함 섹션:
1. **히어로**: 전체 화면 블랙 배경 + 초대형 올캡스 타이틀 "TRANSFORM YOUR BODY" + 네온 라임 액센트 + "JOIN NOW" CTA
2. **통계 바**: 가로 스크롤 또는 4열 — "500+ Members" / "15 Trainers" / "24/7 Access" / "50+ Classes"
3. **프로그램 카드**: 4개 카드 (Weight Training / HIIT / Yoga / Boxing) — 호버 시 네온 보더 애니메이션
4. **멤버십 가격**: 3단계 (Basic / Premium / Elite) — 대각선 컷 디자인 + "BEST VALUE" 배지
5. **트레이너 섹션**: 3명의 트레이너 프로필 (이니셜 아바타 + 이름 + 전문 분야 + 한 줄 소개)
6. **스케줄 테이블**: 주간 클래스 시간표 — 깔끔한 그리드 테이블
7. **고객 변화**: Before/After 스타일 (텍스트 기반 후기 — "Lost 20kg in 6 months" 등 3개)
8. **CTA 섹션**: "YOUR FIRST WEEK IS FREE" + 이름/이메일/전화 입력 폼 + "START NOW" 버튼
9. **푸터**: 블랙 배경 + 네온 악센트 링크

---

### 템플릿 4: 부동산 / 프로퍼티 (`/templates/realestate`)
**디자인 방향: 럭셔리 모던 미니멀**
- 색상: 화이트(#ffffff) + 차콜(#2d2d2d) + 샴페인 골드(#c9a96e)
- 폰트: "Cormorant Garamond" (헤딩 — 엘레강트 세리프) + "Outfit" (본문)
- 느낌: 하이엔드 부동산 에이전시, 럭셔리 아파트 분양 사이트
- 특수 효과: 넓은 여백, 풀 와이드 레이아웃, 호리존탈 스크롤 갤러리

포함 섹션:
1. **히어로**: 풀 화면 + 초대형 세리프 "Find Your Dream Home" + 서치 바 (Location / Type / Price Range 드롭다운) + "Search Properties" 버튼
2. **주요 매물**: 가로 스크롤 카드 3~4개 (가상의 매물 — 그래디언트 블록으로 이미지 대체 + 주소 + 가격 + 면적 + 방 수)
3. **서비스**: 3열 (Buy / Sell / Rent) 각각 아이콘 + 설명
4. **통계**: "10+ Years Experience" / "2,500+ Properties Sold" / "98% Client Satisfaction" / "25 Awards" — 카운트업 애니메이션
5. **에이전트 소개**: 2~3명 에이전트 카드 (이니셜 아바타 + 이름 + 직함 + 연락 버튼)
6. **고객 후기**: 대형 인용문 스타일 슬라이더 (자동 전환 또는 좌우 화살표)
7. **문의 폼**: 2열 레이아웃 — 좌측에 연락처 정보, 우측에 폼 (이름/이메일/전화/메시지)
8. **푸터**: 3열 + 뉴스레터 구독 입력 필드

---

## 추가 기능: 템플릿 정보 오버레이

각 템플릿 페이지 상단 우측에 "ℹ️ Template Info" 토글 버튼을 넣어서, 클릭하면 **우측에서 슬라이드인되는 사이드 드로어(width: 360px, 반투명 백드롭)** 형태로 해당 템플릿의 정보를 표시. Framer Motion `AnimatePresence`로 열림/닫힘 애니메이션 처리:
- **Template Name**: SaaS Product / Restaurant / Fitness / Real Estate
- **Design Style**: 디자인 스타일 설명
- **Tech Stack**: Next.js, Tailwind CSS, Framer Motion
- **Delivery Time**: 48 hours
- **Features**: 반응형, SEO 최적화, 접근성 고려 등
- "Get This Template" 버튼 → movatech.org/contact 링크

이 오버레이는 클라이언트에게 "이 퀄리티를 48시간 안에 만들어 드립니다"를 직접 보여주는 세일즈 도구입니다.

---

## 기술 요구사항

### 반응형 디자인
- 모든 템플릿은 모바일 / 태블릿 / 데스크톱 완벽 대응
- 모바일에서 네비게이션은 햄버거 메뉴로 전환
- 가격 카드는 모바일에서 1열, 데스크톱에서 3열

### 스크롤 애니메이션
- Framer Motion의 `useInView` 또는 `whileInView`를 사용해서 섹션 진입 시 페이드업 애니메이션
- 과하지 않게 — 자연스럽고 세련된 수준으로
- 통계 숫자는 뷰포트 진입 시 카운트업 애니메이션

### 폼 처리
- 모든 폼은 UI만 존재 (실제 백엔드 연결 없음)
- 제출 버튼 클릭 시 성공 모달/토스트 표시 ("Thank you! We'll be in touch.")
- 기본적인 클라이언트 사이드 유효성 검사 (빈 필드 체크)

### 네비게이션
- 각 템플릿의 네비게이션은 해당 페이지 내 섹션으로 스무스 스크롤
- 스크롤 시 네비게이션 바 배경 변화 (투명 → 불투명)
- 모바일 햄버거 메뉴

### SEO & Open Graph
- 각 페이지(갤러리 + 4개 템플릿)에 `generateMetadata()`로 title, description, Open Graph 메타 설정
- OG 이미지: 각 템플릿의 대표 색상 + 타이틀을 조합한 **Next.js OG Image Generation** (`opengraph-image.tsx`) 사용 — 1200x630px
- 갤러리 메인 페이지에도 별도 OG 이미지 생성 (4개 템플릿 색상을 조합한 그리드 프리뷰)
- Upwork/Fiverr에서 링크 공유 시 매력적인 프리뷰가 표시되어야 함

### 성능 목표
- **Lighthouse 점수 목표**: Performance 90+ / Accessibility 95+ / SEO 100 / Best Practices 95+
- Framer Motion 컴포넌트는 dynamic import + `ssr: false`로 번들 최적화
- 폰트는 `next/font/google`로 최적화 로딩

---

## 파일 구조
```
landing-page-templates/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # 갤러리 메인 페이지
│   │   └── templates/
│   │       ├── saas/
│   │       │   └── page.tsx
│   │       ├── restaurant/
│   │       │   └── page.tsx
│   │       ├── fitness/
│   │       │   └── page.tsx
│   │       └── realestate/
│   │           └── page.tsx
│   ├── components/
│   │   ├── gallery/              # 갤러리 페이지 컴포넌트
│   │   ├── templates/
│   │   │   ├── saas/             # SaaS 템플릿 섹션 컴포넌트들
│   │   │   ├── restaurant/       # 레스토랑 템플릿 섹션 컴포넌트들
│   │   │   ├── fitness/          # 피트니스 템플릿 섹션 컴포넌트들
│   │   │   └── realestate/       # 부동산 템플릿 섹션 컴포넌트들
│   │   └── shared/               # 공유 컴포넌트 (모달, 토스트 등)
│   └── styles/
│       └── globals.css
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## README.md 내용
프로페셔널한 README 작성 (영어로):
- 프로젝트 제목: "Landing Page Templates — Portfolio Showcase"
- 설명: 4가지 업종별 프로덕션 품질 랜딩 페이지 템플릿 컬렉션
- 각 템플릿 소개 (이름 + 디자인 스타일 한 줄 설명)
- Tech Stack (배지 포함)
- Getting Started
- Demo 링크 플레이스홀더
- "Built by" — MyeongSub Kim / MOVA Tech

---

## 품질 체크리스트
완료 전 반드시 확인:
- [ ] 갤러리 페이지가 세련되고 모든 템플릿으로 자연스럽게 연결되는지
- [ ] 4개 템플릿이 각각 **완전히 다른 디자인**인지 (색상, 폰트, 레이아웃, 분위기)
- [ ] 각 템플릿이 실제 비즈니스 사이트처럼 보이는지 (장난감 느낌 X)
- [ ] 스크롤 애니메이션이 모든 템플릿에서 부드럽게 작동하는지
- [ ] 모든 폼이 유효성 검사 + 성공 모달과 함께 작동하는지
- [ ] 모바일 반응형이 4개 템플릿 모두에서 완벽한지
- [ ] Template Info 오버레이가 각 템플릿에서 정상 작동하는지
- [ ] "Back to Gallery" 네비게이션이 모든 템플릿에 있는지
- [ ] 콘솔 에러 없음
- [ ] `npm run build` 에러 없이 통과
- [ ] Lighthouse Performance 90+ / Accessibility 95+ / SEO 100
- [ ] 각 페이지 OG 이미지가 정상 생성되는지 (`/api/og` 또는 `opengraph-image.tsx`)
- [ ] 외부 링크(movatech.org/contact 등) 실제 접근 가능 여부 확인
- [ ] README 완성

---

## 최종 참고
이 프로젝트의 목적은 단 하나입니다: 클라이언트가 갤러리를 둘러보고 "이 퀄리티로 48시간 만에 만들어준다고? 바로 주문해야겠다"고 느끼게 하는 것. 4개의 템플릿이 4개의 완전히 다른 세계관을 가져야 합니다. 색상, 폰트, 레이아웃, 분위기 — 모든 것이 달라야 합니다.

또한 이 프로젝트는 첫 번째 프로젝트(ai-customer-chatbot)와도 완전히 다른 디자인이어야 합니다. 첫 번째는 딥 네이비 + 블루 SaaS 느낌이었으니, 이 프로젝트의 갤러리 페이지는 그와 대비되는 밝고 미니멀한 디자인 에이전시 분위기로 가주세요.
