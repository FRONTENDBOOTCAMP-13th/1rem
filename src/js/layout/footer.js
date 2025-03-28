class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <!-- ST:Footer Wrapper -->
    <footer id="footer" class="wrapper p-5 bg-light-beige md:px-7.5 lg:px-15 lg:py-10">
      <div class="inner max-w-[1620px] mx-auto">
        <!-- ST:모바일용 리스트 -->
        <nav class="lg:hidden text-brown-0.7">
          <ul>
            <li class="relative after:absolute after:h-[.0625rem] after:bottom-0 after:left-[-1.25rem] after:right-[-1.25rem] after:bg-beige">
              <a href="/src/pages/menu/menu.html" target="_self" class="block content-center h-[3.3125rem] text-2xs">MENU</a>
            </li>
            <li>
              <div class="relative flex justify-center items-center after:absolute after:h-[.0625rem] after:bottom-0 after:left-[-1.25rem] after:right-[-1.25rem] after:bg-beige">
                <a href="/src/pages/story/brand.html" target="_self" class="flex-1 content-center h-[3.3125rem] text-2xs">STORY</a>
                <button type="button" aria-label="STORY 하위 메뉴 펼치기" aria-expanded="false" class="accordion-button w-12.5 h-[3.3125rem] bg-[url(/src/assets/elements/ico_darrow01.svg)] bg-no-repeat bg-center relative"></button>
              </div>
              <div class="accordion-submenu h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <ul>
                  <li>
                    <a href="/src/pages/story/brand.html" class="w-full py-[.625rem] px-5 text-left text-brown-0.5 text-[.75rem] h-8 block"><span>브랜드</span></a>
                  </li>
                  <li>
                    <a href="/src/pages/story/whyburgerking.html" class="w-full py-[.625rem] px-5 text-left text-brown-0.5 text-[.75rem] h-8 block"><span>Why 버거킹</span></a>
                  </li>
                  <li>
                    <a href="/src/pages/story/esgbusiness.html" class="w-full py-[.625rem] px-5 text-left text-brown-0.5 text-[.75rem] h-8 block"><span>ESG 경영</span></a>
                  </li>
                  <li>
                    <a href="/src/pages/story/smartqsr.html" class="w-full py-[.625rem] px-5 text-left text-brown-0.5 text-[.75rem] h-8 block"><span>Smart QSR</span></a>
                  </li>
                  <li>
                    <a href="/src/pages/story/awards.html" class="w-full py-[.625rem] px-5 text-left text-brown-0.5 text-[.75rem] h-8 block"><span>수상실적</span></a>
                  </li>
                  <li>
                    <a href="/src/pages/story/adarchive.html" class="w-full py-[.625rem] px-5 text-left text-brown-0.5 text-[.75rem] h-8 block"><span>광고영상</span></a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="relative flex justify-center items-center after:absolute after:h-[.0625rem] after:bottom-0 after:left-[-1.25rem] after:right-[-1.25rem] after:bg-beige">
                <a href="/src/pages/news/event/ongoing.html" target="_self" class="flex-1 content-center h-[3.3125rem] text-2xs">NEWS</a>
                <button type="button" aria-label="NEWS 하위 메뉴 펼치기" aria-expanded="false" class="accordion-button w-12.5 h-[3.3125rem] bg-[url(/src/assets/elements/ico_darrow01.svg)] bg-no-repeat bg-center relative"></button>
              </div>
              <div class="accordion-submenu h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <ul>
                  <li>
                    <a href="/src/pages/news/eventongoing.html" class="w-full py-[.625rem] px-5 text-left text-brown-0.5 text-[.75rem] h-8 block"><span>이벤트</span></a>
                  </li>
                  <li>
                    <a href="/src/pages/news/notice.html" class="w-full py-[.625rem] px-5 text-left text-brown-0.5 text-[.75rem] h-8 block"><span>공지사항</span></a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="relative after:absolute after:h-[.0625rem] after:bottom-0 after:left-[-1.25rem] after:right-[-1.25rem] after:bg-beige">
              <a href="/src/pages/store/storenear.html" target="_self" class="block content-center h-[3.3125rem] text-2xs">STORE</a>
            </li>
            <li class="relative after:absolute after:h-[.0625rem] after:bottom-0 after:left-[-1.25rem] after:right-[-1.25rem] after:bg-beige">
              <a href="/src/pages/customer/customer.html" target="_self" class="block content-center h-[3.3125rem] text-2xs">CUSTOMER</a>
            </li>
          </ul>
        </nav>
        <!-- ED:모바일용 리스트 -->

        <!-- ST:PC 약관 리스트 -->
        <div class="mt-5 lg:flex lg:justify-between text-brown-0.5 lg:items-center lg:pl-[14.1875rem]">
          <ul class="flex flex-col gap-3 md:flex-row md:justify-center md:gap-9">
            <li class="leading-[1.1]"><button type="button" class="policies-open text-2xs">이용약관</button></li>
            <li class="leading-[1.1]"><button type="button" class="policies-open text-2xs text-brown-0.7 underline">개인정보처리방침</button></li>
            <li class="leading-[1.1]"><button type="button" class="policies-open text-2xs">위치정보 이용약관</button></li>
            <li class="leading-[1.1]"><button type="button" class="policies-open text-2xs">법적고지</button></li>
            <li class="leading-[1.1]"><button type="button" class="policies-open text-2xs">영상정보처리기기 운영관리방침</button></li>
          </ul>
          <a href="https://recruit.bkr.co.kr/recruit/recruit001.do" target="_blank" title="버거킹 인재채용 사이트로 새창열림 링크" rel="noopener noreferrer" class="hidden lg:inline-block py-2 pr-[2.375rem] pl-3 text-2xs text-brown text-center rounded-[3.125rem] bg-brown-0.05 bg-[url('/src/assets/elements/ico_bt_link.svg')] bg-no-repeat bg-[right_12px_center] opacity-70">인재채용</a>
        </div>
        <!-- ED:PC 약관 리스트 -->

        <!-- ST:PC 주소 -->
        <div class="mt-10 text-brown-0.5 md:flex md:flex-row md:justify-between md:items-start">
          <div class="lg:flex lg:gap-[1.6875rem]">
            <a href="/src/pages/home.html" target="_self" title="BURGER KING 홈으로 이동" class="block w-25 h-3 bg-[url(/src/assets/elements/bg_logo_b.svg)] bg-no-repeat bg-contain lg:w-50 lg:h-6"></a>
            <address class="mt-4 text-2xs not-italic lg:mt-0">
              <p>
                서울특별시 종로구 삼봉로 71 G타워 4F,5F<br />
                사업자등록번호 : 101-86-76277 <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1018676277" target="_blank" title="사업자정보확인 사이트로 새창열림 링크" rel="noopener noreferrer" class="text-brown-0.7 underline">사업자정보확인</a><br />
                통신판매업 신고 : 2016-서울종로-1050<br />
                ㈜ 비케이알 대표이사 : 이동형
              </p>
              <small class="text-2xs">ⓒBKR Co., Ltd. All right Reserved</small>
            </address>
          </div>
          <!-- ST:PC SNS 리스트-->
          <ul class="flex gap-4 mt-4 md:mt-7 lg:gap-5 lg:mt-5">
            <li><a href="https://www.instagram.com/burgerkingkorea/" target="_blank" title="버거킹 인스타그램으로 새창 열림 링크" rel="noopener noreferrer" class="block w-6 h-6 rounded-full bg-[url(/src/assets/elements/ico_sns_instagram.svg)] bg-no-repeat bg-cover lg:w-8 lg:h-8"></a></li>
            <li><a href="https://www.facebook.com/burgerkingkorea" target="_blank" title="버거킹 페이스북으로 새창 열림 링크" rel="noopener noreferrer" class="block w-6 h-6 rounded-full bg-[url(/src/assets/elements/ico_sns_facebook.svg)] bg-no-repeat bg-cover lg:w-8 lg:h-8"></a></li>
            <li><a href="https://x.com/BurgerKing_KOR" target="_blank" title="버거킹 X로 새창 열림 링크" rel="noopener noreferrer" class="block w-6 h-6 rounded-full bg-[url(/src/assets/elements/ico_sns_x.svg)] bg-no-repeat bg-cover lg:w-8 lg:h-8"></a></li>
            <li><a href="https://www.youtube.com/@burgerking_korea" target="_blank" title="버거킹 유튜브로 새창 열림 링크" rel="noopener noreferrer" class="block w-6 h-6 rounded-full bg-[url(/src/assets/elements/ico_sns_youtube.svg)] bg-no-repeat bg-cover lg:w-8 lg:h-8"></a></li>
            <li class="relative pl-4 before:absolute before:left-0 before:top-1/2 before:translate-y-[-50%] before:w-[.0938rem] before:h-4 before:bg-border-form"><a href="https://www.tim-hortons.co.kr/WEB0100" target="_blank" title="팀홀튼 사이트로 새창 열림 링크" rel="noopener noreferrer" class="block w-6 h-6 rounded-full bg-[url(/src/assets/elements/ico_timhortons.svg)] bg-no-repeat bg-cover lg:w-8 lg:h-8"></a></li>
          </ul>
          <!-- ED:PC SNS -->
        </div>
        <!-- ED:PC 주소 -->
      </div>
    </footer>
    <dialog id="policyModal" class="bg-beige lg:backdrop:bg-brown-0.7 m-auto lg:rounded-[1.25rem] max-lg:min-w-dvw max-lg:min-h-dvh lg:w-160 lg:h-[90vh] text-brown">
      <div id="modalContent"></div>
    </dialog>
    <!-- ED:Footer Wrapper -->
    `;
  }
}

// 웹 컴포넌트 등록
customElements.define('common-footer', Footer);
