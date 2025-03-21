class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="includeJs z-2 sticky top-0">
      <div class="top-0 sticky bg-beige z-1 lg:px-[60px]">
        <div class="h-[56px] px-[50px] text-lg lg:items-center lg:px-0 lg:flex lg:w-full lg:max-w-[1620px] lg:h-[98px] lg:mx-auto">
          <!-- ST:Logo -->
          <div class="flex-1 px-[30px] min-w-0 text-center lg:flex-1 lg:static lg:px-0 lg:max-w-[200px] lg:h-[24px]">
            <h1 class="absolute left-[20px] sm:left-[30px] top-[50%] w-[150px] h-[16px] mt-[-8px] lg:static lg:block lg:left-0 lg:mt-0 lg:text-center"><a href="#" class="bg-[url('/src/assets/elements/bg_logo.svg')] inline-block min-w-[200px] indent-[-999em;] bg-no-repeat bg-contain h-[16px] bg-[center_left] lg:h-[24px] lg:min-w-[200px] lg:inline-block">Burger King</a></h1>
          </div>
          <!-- ED:Logo -->

          <!-- ST:Menu list -->
          <nav class="hidden lg:flex flex-1 h-full justify-center px-[20px]">
            <ul class="flex">
              <!-- ST:MENU -->
              <li class="relative">
                <div class="h-full">
                  <a class="text-brown font-BKBulMatPro items-center p-[10px_14px_10px_14px] justify-center flex h-full hd:p-[10px_20px_10px_20px] focus:text-ci hover:text-ci" href="#"><span class="text-3xl h-[26px] hd:text-4xl">MENU</span></a>
                </div>
              </li>
              <!-- ED:MENU -->

              <!-- ST:STORY -->
              <li class="relative group">
                <div class="h-full">
                  <a class="text-brown font-BKBulMatPro items-center p-[10px_14px_10px_14px_14px] justify-center flex h-full hd:p-[10px_20px_10px_20px] focus:text-ci hover:text-ci" href="#">
                    <span class="text-3xl h-[26px] hd:text-4xl">STORY</span>
                  </a>
                </div>
                <!-- ST:STORY list-->
                <ul class="top-[100%] left-[50%] group-focus-within:opacity-100 h-[58px] mt-[-20px] p-[5px_20px_5px_20px] flex rounded-[50px] transform translate-x-[-50%] absolute pl-[25px] text-lg overflow-hidden opacity-0 z-20 ease-linear bg-brown group-hover:opacity-100 group-hover:translate-y-0 transition-opacity duration-200">
                  <li>
                    <a href="#" class="block h-[48px] p-[5px_12px_5px_12px] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[38px] whitespace-nowrap"><span>브랜드</span></a>
                  </li>
                  <li>
                    <a href="#" class="block h-[48px] p-[5px_12px_5px_12px] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[38px] whitespace-nowrap"><span>Why 버거킹</span></a>
                  </li>
                  <li>
                    <a href="#" class="block h-[48px] p-[5px_12px_5px_12px] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[38px] whitespace-nowrap"><span>ESG 경영</span></a>
                  </li>
                  <li>
                    <a href="#" class="block h-[48px] p-[5px_12px_5px_12px] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[38px] whitespace-nowrap"><span>Smart QSR</span></a>
                  </li>
                  <li>
                    <a href="#" class="block h-[48px] p-[5px_12px_5px_12px] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[38px] whitespace-nowrap"><span>수상실적</span></a>
                  </li>
                  <li>
                    <a href="#" class="block h-[48px] p-[5px_12px_5px_12px] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[38px] whitespace-nowrap"><span>광고영상</span></a>
                  </li>
                </ul>
                <!-- ED:STORY list-->
              </li>
              <!-- ED:STORY -->

              <!-- ST:NEWS -->
              <li class="relative group">
                <div class="h-full">
                  <a class="text-brown font-BKBulMatPro items-center p-[10px_14px_10px_14px] justify-center flex h-full hd:p-[10px_20px_10px_20px] focus:text-ci hover:text-ci" href="#"><span class="text-3xl h-[26px] hd:text-4xl">NEWS</span></a>
                </div>
                <!-- ST:NEWS List -->
                <ul class="top-[100%] left-[50%] group-focus-within:opacity-100 h-[58px] mt-[-20px] p-[5px_20px_5px_20px] flex rounded-[50px] transform translate-x-[-50%] absolute pl-[25px] text-lg overflow-hidden opacity-0 z-20 ease-linear bg-brown group-hover:opacity-100 group-hover:translate-y-0 transition-opacity duration-200">
                  <li>
                    <a href="#" class="block h-[48px] p-[5px_12px_5px_12px] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[38px] whitespace-nowrap"><span>이벤트</span></a>
                  </li>
                  <li>
                    <a href="#" class="block h-[48px] p-[5px_12px_5px_12px] text-[#89665b] focus:text-light-beige hover:text-light-beige leading-[38px] whitespace-nowrap"><span>공지사항</span></a>
                  </li>
                </ul>
                <!-- ED:NEWS List -->
              </li>
              <!-- ED:NEWS -->

              <!-- ST:STORE -->
              <li class="relative">
                <div class="h-full">
                  <a class="text-brown font-BKBulMatPro items-center p-[10px_14px_10px_14px] justify-center flex h-full hd:p-[10px_20px_10px_20px] focus:text-ci hover:text-ci" href="#"><span class="text-3xl h-[26px] hd:text-4xl">STORE</span></a>
                </div>
              </li>
              <!-- ED:STORE -->

              <!-- ST:CUSTOMER -->
              <li class="relative">
                <div class="h-full">
                  <a class="text-brown font-BKBulMatPro items-center p-[10px_14px_10px_14px] justify-center flex h-full hd:p-[10px_20px_10px_20px] focus:text-ci hover:text-ci" href="#"><span class="text-3xl h-[26px] hd:text-4xl">CUSTOMER</span></a>
                </div>
              </li>
              <!-- ED:CUSTOMER -->
            </ul>
          </nav>
          <!-- ED:Menu list -->

          <!-- ST:Button -->
          <div class="left-auto right-[20px] sm:right-[30px] absolute top-0 flex h-full z-1 items-center justify-center lg:block lg:right-0 lg:left-0 lg:relative lg:ml-auto lg:h-[36px]">
            <!-- 모바일용 버튼 -->
            <button class="mognb-open lg:hidden relative w-[24px] h-full text-sm indent-[-999em] text-left bg-center before:content-[''] before:absolute before:left-[-5px] before:top-0 before:w-[34px] before:h-full bg-[url('/src/assets/elements/ico_burger.svg')] bg-no-repeat bg-[length:24px_24px]"><span>GNB</span></button>
            <!-- PC용 버튼 -->
            <a href="#" class="hidden lg:inline-block h-full pt-[.5625rem] pb-2 pr-4 pl-[2.125rem] text-xs text-brown text-center rounded-[3.125rem] bg-brown-0.05 bg-[url('/src/assets/elements/ico_tit_store.svg')] bg-no-repeat bg-[left_14px_center] bg-[length:14px]"><span>가맹점 모집</span></a>
          </div>
          <!-- ED:Button -->
        </div>
      </div>
      </header>
    `;
  }
}

// 웹 컴포넌트 등록
customElements.define('common-header', Header);
