# UI Project 1rem;

멋쟁이사자처럼 16팀 1rem; 입니다.

## 프로젝트 개요

버거킹 공식 웹사이트를 클론하여 UI 디자인 및 인터랙션을 구현한 프로젝트입니다.  
최신 UI/UX 트렌드를 반영한 반응형 웹사이트 제작 및 컴포넌트 기반 개발 연습을 위해 제작되었습니다.

## 배포 사이트

🍔 [BurgerQueen? 바로가기](https://1rem.netlify.app)

## 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/onewayay"><img src="/src/assets/index-img/team/oneway.webp" width="150" height="150" alt=""/><br /><sub><b> @onewayay </b></a></td>
      <td align="center"><a href="https://github.com/mumuyuji"><img src="/src/assets/index-img/team/mumu29.webp" width="150" height="150" alt=""/><br /><sub><b> @mumuyuji </b></a></td>
      <td align="center"><a href="https://github.com/SiwonYoo"><img src="/src/assets/index-img/team/siwon_622.webp" width="150" height="150" alt=""/><br /><sub><b> @SiwonYoo </b></a></td>
      <td align="center"><a href="https://github.com/YouVin"><img src="/src/assets/index-img/team/yuvin99.webp" width="150" height="150" alt=""/><br /><sub><b> @YouVin </b></a></td>
    </tr>
    <tr>
      <td align="center">임한길</td>
      <td align="center">남유지</td>
      <td align="center">유시원</td>
      <td align="center">황유빈</td>
    </tr>
  </tbody>
</table>

### 역할 및 구현 페이지

- **임한길** ![Team Leader](https://img.shields.io/badge/Team%20Leader-FF5733?style=flat) : STORY 하위 페이지 전부, 폰트 설정 및 관리
- **남유지** ![Secretary](https://img.shields.io/badge/Secretary-3498DB?style=flat) : MENU, NEWS, STORE
- **유시원** ![Team Member](https://img.shields.io/badge/Team%20Member-2ECC71?style=flat) : CUSTOMER, 가맹점 모집, 약관 5종 이미지 네이밍 및 관리
- **황유빈** ![Team Member](https://img.shields.io/badge/Team%20Member-2ECC71?style=flat) : 메인 페이지 header / footer, 공통 버튼

## 기술 스택

- 📂 버전 관리: ![Git](https://img.shields.io/badge/Git-F05032style=flat&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)
- 🤝 협업 도구: ![Notion](https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white)
- ⚙️ 패키지 매니저: ![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)
- 🎨 프론트엔드 개발: ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
- 🛠 개발 도구: ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)

## 설치 및 실행 방법

```bash
https://github.com/FRONTENDBOOTCAMP-13th/1rem.git
cd 1rem
npm install
npm run dev
```

## 기본 구조

- public 정적 파일
  - fonts 폴더 -> 메인 폰트, 서브 폰트
  - asset 폴더 -> 파비콘, 로고
- src 동적 파일
  - asset 폴더 -> 이미지 파일
  - components 폴더 -> 컴포넌트
  - pages 폴더 -> 페이지
- 컴포넌트 파일은 src/components 폴더 하위에 생성하며, component-메뉴명(컴포넌트명)으로 네이밍 한다.
- 페이지 파일은 src/pages 폴더 하위에 생성하며 페이지명으로 네이밍 한다.

## 폴더 구조

```
📂 1rem
├── 📂 public
│   └── 📂 fonts
└── 📂 src
  ├── 📂 assets
  ├── 📂 components
  ├── 📂 js
  │   └── 📂 layout
  └── 📂 pages
      ├── 📂 customer
      ├── 📂 franchise
      ├── 📂 menu
      ├── 📂 news
      ├── 📂 policies
      ├── 📂 store
      └── 📂 story
```

## 커밋 컨벤션

- `[타입] 이름 / 내용` 으로 작성
- 세부 내역이 필요하다면 한 줄 띄어서
- -로 각 항목을 구분하여 작성

```
# 한줄 커밋
[chore] 임한길 / prettier 패키지 추가

# 여러줄 커밋
[feat] 임한길 / STORY 페이지 구현

- 브랜드 페이지
- Why 버거킹 페이지
```

<table>
  <thead>
    <tr>
      <th>type</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody class="">
    <tr>
      <td>[feat]</td>
      <td>새로운 기능 추가</td>
    </tr>
  <tr>
      <td>[bugFix]</td>
      <td>버그 수정</td>
    </tr>
  <tr>
      <td>[docs]</td>
      <td>문서의 수정</td>
    </tr>
  <tr>
      <td>[modify]</td>
      <td>코드 변경</td>
    </tr>
  <tr>
      <td>[refactor</td>
      <td>리팩토링</td>
    </tr>
  <tr>
      <td>[design]</td>
      <td>CSS 등 사용자 UI 디자인 변경</td>
    </tr>
  <tr>
      <td>[comment]</td>
      <td>필요한 주석 추가 및 변경</td>
    </tr>
  <tr>
      <td>[style]</td>
      <td>코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우</td>
    </tr>
  <tr>
      <td>[test]</td>
      <td>테스트(테스트 코드 추가, 수정, 삭제, 비즈니스 로직에 변경이 없는 경우)</td>
    </tr>
  <tr>
      <td>[chore]</td>
      <td>빌드 수정, 패키지 매니저 설정, 운영 코드 변경이 없는 경우(assets image, 패키지 매니저 등)</td>
    </tr>
  <tr>
      <td>[init]</td>
      <td>프로젝트 초기 생성</td>
    </tr>
  <tr>
      <td>[rename]</td>
      <td>파일 혹은 폴더명 수정하거나 옮기는 경우</td>
    </tr>
  <tr>
      <td>[remove]</td>
      <td>파일을 삭제하는 작업만 수행하는 경우</td>
    </tr>
  <tr>
      <td>[merge]</td>
      <td>Pull 과정 중 현재 commit과 자동 병합이 일어날 때</td>
    </tr>
  <tr>
      <td>[build]</td>
      <td>새로운 라이브러리 혹은 패키지</td>
    </tr>
  </tbody>
</table>

## 코딩 컨벤션

- 각 구역별 가독성을 위해 시작 / 끝 영역을 표시해준다.

```html
<!-- ST: header -->
<!-- ED: header -->

<!-- ST: 메뉴 리스트 -->
<!-- ED: 메뉴 리스트 -->
```

- 4px 단위가 아닌 수치들은 [rem]로 작성하기.

```
ex ) py-[.3125rem]
```

## 라이선스

본 프로젝트는 학습 목적으로 제작되었으며, 상업적 용도로 사용되지 않습니다.

## 참고 사이트

🔗 [버거킹](https://www.burgerking.co.kr/home)
