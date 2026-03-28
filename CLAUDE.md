# CLAUDE.md

## Project Overview

Landing page templates portfolio — 8개의 서로 다른 디자인의 프로덕션 수준 랜딩 페이지 템플릿 모음.
"48시간 랜딩 페이지 납품" 역량을 보여주기 위한 포트폴리오 프로젝트.

- **Live Demo**: https://landing-page-templates-three.vercel.app
- **Repo**: https://github.com/JJolSung/landing-page-templates

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (tailwind.config.ts에 커스텀 색상/폰트/애니메이션 정의)
- Framer Motion (애니메이션)
- Lucide React (아이콘)
- Vercel 배포

## Project Structure

```
src/
├── app/                        # Next.js App Router 페이지
│   └── templates/{name}/       # 각 템플릿 라우트
├── components/
│   ├── shared/                 # 공용 컴포넌트 (ScrollReveal, SuccessToast 등)
│   └── templates/
│       ├── saas/               # SaaS 템플릿 컴포넌트들
│       ├── restaurant/         # Restaurant 템플릿
│       ├── fitness/            # Fitness 템플릿
│       ├── realestate/         # Real Estate 템플릿
│       ├── medical/            # Medical 템플릿
│       ├── ecommerce/          # E-commerce 템플릿
│       ├── course/             # Course 템플릿
│       └── app/                # Mobile App 템플릿
├── data/                       # 템플릿 데이터/설정
├── lib/                        # 유틸리티 (useFormSubmit 등)
└── styles/                     # 글로벌 스타일
```

## Commands

```bash
npm run dev       # 개발 서버 (localhost:3000)
npm run build     # 프로덕션 빌드
npm run lint      # ESLint 실행
```

## Key Conventions

### 템플릿별 색상 체계
각 템플릿은 `tailwind.config.ts`에 고유 색상 팔레트가 정의되어 있음:
- SaaS: `saas-bg`, `saas-accent`, `saas-surface`, `saas-border`
- Restaurant: `restaurant-bg`, `restaurant-green`, `restaurant-gold`
- 등등 각 템플릿별 prefix로 구분

### 텍스트 사이즈 규칙
- **SaaS 템플릿**: `text-xs` 사용 금지. 최소 `text-sm`부터 사용.
  - Hero 내부 미니 대시보드 목업은 예외 (카드 안에서 `text-[8px]`~`text-sm` 사용, lg+ 브레이크포인트에서 반응형으로 키움)
- 다른 템플릿은 아직 미적용 — 수정 시 SaaS와 동일 기준 적용 권장

### 애니메이션
- `tailwind.config.ts`의 `keyframes`에 공용 애니메이션 정의
- 컴포넌트 내 인라인 arbitrary animation도 사용 (예: `animate-[logoScroll_10s_linear_infinite]`)
- 반응형 애니메이션: 브레이크포인트별 duration 비례 조절로 체감 속도 일정하게 유지

### 로고 배너 (SaasLogoBanner)
- 무한 스크롤 구현: `translateX(-50%)` + 로고 복제
- 브레이크포인트별 로고 세트 수 조절 (`hidden xl:flex`, `hidden 2xl:flex`)
- 세트 수에 비례한 animation duration으로 모든 화면에서 동일 속도 유지

### SVG 차트 (SaasProductScreenshots)
- Revenue Over Time: SVG 라인 차트 (cubic bezier smooth path)
- 7D/30D/90D 기간 전환 시 framer-motion `motion.path`로 path morph 애니메이션
- 데이터 포인트 수 정규화 (`interpolateValues`)로 path 구조 통일 후 애니메이션

### 아이콘
- 기본: Lucide React 사용
- X(구 Twitter) 로고: `SaasFooter.tsx`에 커스텀 SVG 컴포넌트로 구현 (lucide에 없음)

### 코드 스타일
- 프로젝트 linter가 작은따옴표(single quotes)로 자동 변환함
- 컴포넌트 파일명: `Saas{SectionName}.tsx` 패턴

## Branch Strategy

- `main`: 안정 브랜치
- `feature/{template}-improvements`: 템플릿별 개선 브랜치
  - 예: `feature/saas-improvements`
