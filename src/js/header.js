// includeHtml.js

// HTML을 가져와 삽입하고 초기화하는 함수
export function includeHtml() {
  const includeTarget = document.querySelectorAll('.includeJs');

  includeTarget.forEach(function (el) {
    const targetFile = el.dataset.includeFile;

    if (targetFile) {
      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) {
            el.innerHTML = this.responseText;

            // 삽입된 HTML에 대해 초기화 실행
            initializeComponent(el);
          } else if (this.status === 404) {
            el.innerHTML = 'Include not found.';
          }
        }
      };

      xhttp.open('GET', targetFile, true);
      xhttp.send();
    }
  });
}

// 동적으로 삽입된 HTML에 대해 초기화
function initializeComponent(container) {
  let body = document.querySelector('body');

  const moGnbOpen = container.querySelector('.mognb-open');
  const moGnb = container.querySelector('#moGnb');
  const moGnbClose = container.querySelector('.mognb-close');

  if (moGnbOpen && moGnb && moGnbClose) {
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
