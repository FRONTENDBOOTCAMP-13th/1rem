class mainHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="top-0 sticky bg-beige z-1 lg:px-15">
      <div class="h-14 px-[3.125rem] text-lg lg:items-center lg:px-0 lg:flex lg:w-full lg:max-w-405 lg:h-[6.125rem] lg:mx-auto">
        <!-- ST:Logo -->
        <div class="flex-1 px-[1.875rem] min-w-0 text-center lg:flex-1 lg:static lg:px-0 lg:max-w-50 lg:h-6">
          <h1 class="absolute left-5 sm:left-[1.875rem] top-[50%] w-[9.375rem] h-4 mt-[-.5rem] lg:static lg:block lg:left-0 lg:mt-0 lg:text-center"><a href="/src/pages/home.html" class="bg-[url('/src/assets/elements/bg_logo.svg')] inline-block min-w-50 indent-[-999em;] bg-no-repeat bg-contain h-4 bg-[center_left] lg:h-6 lg:min-w-50 lg:inline-block">Burger King</a></h1>
        </div>
        <!-- ED:Logo -->

        <!-- ST:Menu list -->
        <nav id="gnb" class="hidden lg:flex flex-1 h-full justify-center px-5">
          <ul class="flex">
            <!-- ST:MENU -->
            <li class="relative">
              <div class="h-full">
                <a class="text-brown font-BKBulMatPro items-center p-[.625rem_.875rem_.625rem_.875rem] justify-center flex h-full hd:p-[.625rem_1.25rem_.625rem_1.25rem] focus:text-ci hover:text-ci" href="/src/pages/menu/menu.html"><span class="text-3xl h-[1.625rem] hd:text-4xl">MENU</span></a>
              </div>
            </li>
            <!-- ED:MENU -->

            <!-- ST:STORY -->
            <li class="relative group">
              <div class="h-full">
                <a class="text-brown font-BKBulMatPro items-center p-[.625rem_.875rem_.625rem_.875rem] justify-center flex h-full hd:p-[.625rem_1.25rem_.625rem_1.25rem] focus:text-ci hover:text-ci" href="/src/pages/story/brand.html"><span class="text-3xl h-[1.625rem] hd:text-4xl">STORY</span></a>
              </div>
              <!-- ST:STORY list-->
              <ul class="flex top-[100%] left-[50%] h-[3.625rem] mt-[-1.25rem] p-[.3125rem_1.25rem_.3125rem_1.25rem] rounded-[3.125rem] transform translate-x-[-50%] translate-y-1 absolute pl-[1.5625rem] text-lg overflow-hidden opacity-0 invisible z-20 ease-linear bg-brown transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
                <li>
                  <a href="/src/pages/story/brand.html" class="block h-12 p-[.3125rem_.75rem_.3125rem_.75rem] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[2.375rem] whitespace-nowrap"><span>브랜드</span></a>
                </li>
                <li>
                  <a href="/src/pages/story/whyburgerking.html" class="block h-12 p-[.3125rem_.75rem_.3125rem_.75rem] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[2.375rem] whitespace-nowrap"><span>Why 버거킹</span></a>
                </li>
                <li>
                  <a href="/src/pages/story/esgbusiness.html" class="block h-12 p-[.3125rem_.75rem_.3125rem_.75rem] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[2.375rem] whitespace-nowrap"><span>ESG 경영</span></a>
                </li>
                <li>
                  <a href="/src/pages/story/smartqsr.html" class="block h-12 p-[.3125rem_.75rem_.3125rem_.75rem] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[2.375rem] whitespace-nowrap"><span>Smart QSR</span></a>
                </li>
                <li>
                  <a href="/src/pages/story/awards.html" class="block h-12 p-[.3125rem_.75rem_.3125rem_.75rem] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[2.375rem] whitespace-nowrap"><span>수상실적</span></a>
                </li>
                <li>
                  <a href="/src/pages/story/adarchive.html" class="block h-12 p-[.3125rem_.75rem_.3125rem_.75rem] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[2.375rem] whitespace-nowrap"><span>광고영상</span></a>
                </li>
              </ul>
              <!-- ED:STORY list-->
            </li>
            <!-- ED:STORY -->

            <!-- ST:NEWS -->
            <li class="relative group">
              <div class="h-full">
                <a class="text-brown font-BKBulMatPro items-center p-[.625rem_.875rem_.625rem_.875rem] justify-center flex h-full hd:p-[.625rem_1.25rem_.625rem_1.25rem] focus:text-ci hover:text-ci" href="/src/pages/news/eventongoing.html"><span class="text-3xl h-[1.625rem] hd:text-4xl">NEWS</span></a>
              </div>
              <!-- ST:NEWS List -->
              <ul class="flex top-[100%] left-[50%] h-[3.625rem] mt-[-1.25rem] p-[.3125rem_1.25rem_.3125rem_1.25rem] rounded-[3.125rem] transform translate-x-[-50%] translate-y-1 absolute pl-[1.5625rem] text-lg overflow-hidden opacity-0 invisible z-20 ease-linear bg-brown transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
                <li>
                  <a href="/src/pages/news/eventongoing.html" class="block h-12 p-[.3125rem_.75rem_.3125rem_.75rem] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[2.375rem] whitespace-nowrap"><span>이벤트</span></a>
                </li>
                <li>
                  <a href="/src/pages/news/notice.html" class="block h-12 p-[.3125rem_.75rem_.3125rem_.75rem] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[2.375rem] whitespace-nowrap"><span>공지사항</span></a>
                </li>
              </ul>
              <!-- ED:NEWS List -->
            </li>
            <!-- ED:NEWS -->

            <!-- ST:STORE -->
            <li class="relative">
              <div class="h-full">
                <a class="text-brown font-BKBulMatPro items-center p-[.625rem_.875rem_.625rem_.875rem] justify-center flex h-full hd:p-[.625rem_1.25rem_.625rem_1.25rem] focus:text-ci hover:text-ci" href="/src/pages/store/storenear.html"><span class="text-3xl h-[1.625rem] hd:text-4xl">STORE</span></a>
              </div>
            </li>
            <!-- ED:STORE -->

            <!-- ST:CUSTOMER -->
            <li class="relative">
              <div class="h-full">
                <a class="text-brown font-BKBulMatPro items-center p-[.625rem_.875rem_.625rem_.875rem] justify-center flex h-full hd:p-[.625rem_1.25rem_.625rem_1.25rem] focus:text-ci hover:text-ci" href="/src/pages/customer/customer.html"><span class="text-3xl h-[1.625rem] hd:text-4xl">CUSTOMER</span></a>
              </div>
            </li>
            <!-- ED:CUSTOMER -->
          </ul>
        </nav>
        <!-- ED:Menu list -->

        <!-- ST:Button -->
        <div class="left-auto right-5 sm:right-[1.875rem] absolute top-0 flex h-full z-1 items-center justify-center lg:block lg:right-0 lg:left-0 lg:relative lg:ml-auto lg:h-9">
          <!-- 모바일용 버튼 -->
          <button type="button" class="mognb-open lg:hidden relative w-6 h-full text-sm indent-[-999em] text-left bg-center before:absolute before:left-[-.3125rem] before:top-0 before:w-[2.125rem] before:h-full bg-[url('/src/assets/elements/ico_burger.svg')] bg-no-repeat bg-[length:1.5rem_1.5rem]"><span>GNB</span></button>
          <!-- PC용 버튼 -->
          <a href="/src/pages/franchise/franchise.html" class="hidden lg:inline-block h-full pt-[.5625rem] pb-2 pr-4 pl-[2.125rem] text-xs text-brown text-center rounded-[3.125rem] bg-brown-0.05 bg-[url('/src/assets/elements/ico_tit_store.svg')] bg-no-repeat bg-[left_.875rem_center] bg-[length:.875rem]"><span>가맹점 모집</span></a>
        </div>
        <!-- ED:Button -->
      </div>
    </header>

    <!-- ST:Open mobile menu-->
    <div id="moGnb" class="z-[999] fixed top-0 left-[-110%] bg-beige w-screen h-screen px-5 translate duration-[400ms] lg:hidden">
      <header class="h-[3.5rem] flex justify-between items-center">
        <a href="/src/pages/home.html" target="_self" aria-label="BURGER KING 홈으로 이동" class="block w-[9.375rem] h-4 bg-[url(/src/assets/elements/bg_logo.svg)] bg-no-repeat bg-contain"></a>
        <button type="button" aria-label="모바일 메뉴 닫기" class="mognb-close w-[2.125rem] h-full bg-[url(/src/assets/elements/btn_pop_close.svg)] bg-no-repeat bg-center"></button>
      </header>
      <nav class="h-[calc(100%-8.125rem)]">
        <ul>
          <li><a href="/src/pages/menu/menu.html" class="block content-center h-21 p-5 pl-18.5 font-BKBulMatPro text-4xl text-brown font-bold bg-[url(/src/assets/elements/ico_gnb_menu01.svg)] bg-no-repeat bg-[left_center]">MENU</a></li>
          <li>
            <div class="flex justify-center items-center">
              <a href="/src/pages/story/brand.html" class="flex-1 content-center h-21 p-5 pl-18.5 font-BKBulMatPro text-4xl text-brown font-bold bg-[url(/src/assets/elements/ico_gnb_menu02.svg)] bg-no-repeat bg-[left_center]">STORY</a>
              <button type="button" aria-label="STORY 하위 메뉴 펼치기" aria-expanded="false" class="accordion-button w-[3.625rem] h-21 bg-[url(/src/assets/elements/btn_acc_gnb.svg)] bg-no-repeat bg-center"></button>
            </div>
            <div class="accordion-submenu -mx-5 h-0 overflow-hidden transition-all ease-in-out duration-300">
              <ul class="h-auto py-[.625rem] bg-[#e4d7c8] text-lg overflow-hidden">
                <li class="h-[2.375rem]">
                  <a href="/src/pages/story/brand.html " class="h-[2.375rem] p-[.625rem_1.25rem_.625rem_5.875rem] text-brown whitespace-nowrap block"><span>브랜드</span></a>
                </li>
                <li class="h-[2.375rem]">
                  <a href="/src/pages/story/whyburgerking.html" class="h-[2.375rem] p-[.625rem_1.25rem_.625rem_5.875rem] text-brown whitespace-nowrap block"><span>Why 버거킹</span></a>
                </li>
                <li class="h-[2.375rem]">
                  <a href="/src/pages/story/esgbusiness.html" class="h-[2.375rem] p-[.625rem_1.25rem_.625rem_5.875rem] text-brown whitespace-nowrap block"><span>ESG 경영</span></a>
                </li>
                <li class="h-[2.375rem]">
                  <a href="/src/pages/story/smartqsr.html" class="w-full h-[2.375rem] p-[.625rem_1.25rem_.625rem_5.875rem] text-brown whitespace-nowrap block"><span>Smart QSR</span></a>
                </li>
                <li class="h-[2.375rem]">
                  <a href="/src/pages/story/awards.html" class="h-[2.375rem] p-[.625rem_1.25rem_.625rem_5.875rem] text-brown whitespace-nowrap block"><span>수상실적</span></a>
                </li>
                <li class="h-[2.375rem]">
                  <a href="/src/pages/story/adarchive.html" class="h-[2.375rem] p-[.625rem_1.25rem_.625rem_5.875rem] text-brown whitespace-nowrap block"><span>광고영상</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="flex justify-center items-center">
              <a href="/src/pages/news/eventongoing.html" class="flex-1 content-center h-21 p-5 pl-18.5 font-BKBulMatPro text-4xl text-brown font-bold bg-[url(/src/assets/elements/ico_gnb_menu04.svg)] bg-no-repeat bg-[left_center]">NEWS</a>
              <button type="button" aria-label="NEWS 하위 메뉴 펼치기" aria-expanded="false" class="accordion-button w-[3.625rem] h-21 bg-[url(/src/assets/elements/btn_acc_gnb.svg)] bg-no-repeat bg-center"></button>
            </div>
            <div class="accordion-submenu -mx-5 h-0 overflow-hidden transition-all ease-in-out">
              <ul class="h-auto py-[.625rem] bg-[#e4d7c8] text-lg overflow-hidden">
                <li class="h-[2.375rem]">
                  <a href="/src/pages/news/eventongoing.html " class="h-[2.375rem] p-[.625rem_1.25rem_.625rem_5.875rem] text-brown whitespace-nowrap block"><span>이벤트</span></a>
                </li>
                <li class="h-[2.375rem]">
                  <a href="/src/pages/news/notice.html" class="h-[2.375rem] p-[.625rem_1.25rem_.625rem_5.875rem] text-brown whitespace-nowrap block"><span>공지사항</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li><a href="/src/pages/store/storenear.html" class="block content-center h-21 p-5 pl-18.5 font-BKBulMatPro text-4xl text-brown font-bold bg-[url(/src/assets/elements/ico_gnb_menu03.svg)] bg-no-repeat bg-[left_center]">STORE</a></li>
          <li><a href="/src/pages/customer/customer.html" class="block content-center h-21 p-5 pl-18.5 font-BKBulMatPro text-4xl text-brown font-bold bg-[url(/src/assets/elements/ico_gnb_menu05.svg)] bg-no-repeat bg-[left_center]">CUSTOMER</a></li>
        </ul>
        <a href="/src/pages/franchise/franchise.html" class="inline-block mt-[1.5625rem] pt-[.5625rem] pb-2 pr-4 pl-[2.125rem] text-xs text-brown text-center rounded-[3.125rem] bg-brown-0.05 bg-[url('/src/assets/elements/ico_tit_store.svg')] bg-no-repeat bg-[left_.875rem_center] bg-[length:.875rem]">가맹점 모집</a>
      </nav>
      <footer class="flex justify-between items-center h-18.5">
        <a href="https://recruit.bkr.co.kr/recruit/recruit001.do" target="_blank" title="버거킹 인재채용 페이지로 새창 열림 링크" rel="noopener noreferrer" class="py-[.3125rem] pr-[2.375rem] pl-3 text-sm text-brown text-center rounded-[3.125rem] bg-brown-0.05 bg-[url('/src/assets/elements/ico_bt_link.svg')] bg-no-repeat bg-[right_.75rem_center]">인재채용</a>
        <ul class="flex gap-5">
          <li><a href="https://www.instagram.com/burgerkingkorea/" target="_blank" title="버거킹 인스타그램으로 새창 열림 링크" rel="noopener noreferrer" class="block w-8 h-8 rounded-full bg-[url(/src/assets/elements/ico_sns_instagram.svg)] bg-no-repeat bg-cover"></a></li>
          <li><a href="https://x.com/BurgerKing_KOR" target="_blank" title="버거킹 페이스북으로 새창 열림 링크" rel="noopener noreferrer" class="block w-8 h-8 rounded-full bg-[url(/src/assets/elements/ico_sns_facebook.svg)] bg-no-repeat bg-cover"></a></li>
          <li><a href="https://www.facebook.com/burgerkingkorea" target="_blank" title="버거킹 X로 새창 열림 링크" rel="noopener noreferrer" class="block w-8 h-8 rounded-full bg-[url(/src/assets/elements/ico_sns_x.svg)] bg-no-repeat bg-cover"></a></li>
          <li><a href="https://www.youtube.com/@burgerking_korea" target="_blank" title="버거킹 유튜브로 새창 열림 링크" rel="noopener noreferrer" class="block w-8 h-8 rounded-full bg-[url(/src/assets/elements/ico_sns_youtube.svg)] bg-no-repeat bg-cover"></a></li>
        </ul>
      </footer>
      <!-- ED:Open mobile menu-->
    </div>
    `;

    let body = document.querySelector('body');

    const moGnbOpen = document.querySelector('.mognb-open');
    const moGnb = document.querySelector('#moGnb');
    const moGnbClose = document.querySelector('.mognb-close');

    moGnbOpen.addEventListener('click', () => {
      moGnb.style.left = '0';
      body.style.overflow = 'hidden';
    });

    moGnbClose.addEventListener('click', () => {
      moGnb.style.left = '-100%';
      body.style.overflow = 'auto';
    });
  }
}

// 웹 컴포넌트 등록
customElements.define('main-header', mainHeader);
