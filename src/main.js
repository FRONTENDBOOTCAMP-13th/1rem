import './style.css';
import './js/layout/main-header.js';
import './js/layout/sub-header.js';
import './js/layout/footer.js';
import './js/accordian.js';

// modal logic
const modal = document.getElementById('policyModal');
const content = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

function openPolicyModal(file) {
  fetch(file)
    .then((res) => res.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const innerDialog = doc.querySelector('dialog')?.innerHTML || '<p>불러오기 실패</p>';
      content.innerHTML = innerDialog;
      modal.showModal();
    })
    .catch((err) => {
      content.innerHTML = `<p class="text-red-500">내용을 불러오는 데 실패했습니다.</p>`;
      modal.showModal();
    });
}

if (closeModal) {
  closeModal.addEventListener('click', () => modal.close());
}

// footer 버튼 이벤트 연결
document.addEventListener('DOMContentLoaded', () => {
  const footerButtons = document.querySelectorAll('footer ul button');

  const files = [
    '/src/pages/policies/terms.html', // 이용약관
    '/src/pages/policies/privacy.html', // 개인정보처리방침
    '/src/pages/policies/location.html', // 위치정보 이용약관
    '/src/pages/policies/legal.html', // 법적고지
    '/src/pages/policies/cctv.html', // CCTV 운영관리방침
  ];

  footerButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => openPolicyModal(files[idx]));
  });
});
