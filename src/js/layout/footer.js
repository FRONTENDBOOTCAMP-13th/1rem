class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    `;
  }
}

// 웹 컴포넌트 등록
customElements.define('common-footer', Footer);
