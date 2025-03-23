class SkipNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="skipnavi" class="w-0 h-0 text-0 leading-0">
      <ul class="absolute top-0 left-0 z-[9999]">
        <li class="absolute top-0 left-0"><a href="#container" title="본문내용 바로가기" class="absolute top-0 left-[-62.5rem] block w-[18.75rem] bg-brown border-2 border-white py-[.9375rem] text-center font-bold text-sm text-white focus:left-0">본문내용 바로가기</a></li>
        <li class="absolute top-0 left-0"><a href="#gnb" title="주메뉴 바로가기" class="absolute top-0 left-[-62.5rem] block w-[18.75rem] bg-brown border-2 border-white py-[.9375rem] text-center font-bold text-sm text-white focus:left-0">주메뉴 바로가기</a></li>
        <li class="absolute top-0 left-0"><a href="#footer" title="하단바로가기" class="absolute top-0 left-[-62.5rem] block w-[18.75rem] bg-brown border-2 border-white py-[.9375rem] text-center font-bold text-sm text-white focus:left-0">하단 바로가기</a></li>
      </ul>
    </div>
    `;
  }
}

customElements.define('skip-nav', SkipNav);
