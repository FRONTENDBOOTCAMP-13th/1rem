document.addEventListener('DOMContentLoaded', () => {
  // modal logic
  const body = document.querySelector('body');
  const modal = document.getElementById('policyModal');
  const content = document.getElementById('modalContent');

  function openPolicyModal(file) {
    fetch(file)
      .then((res) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const innerDialog = doc.querySelector('article')?.innerHTML || '<p>불러오기 실패</p>';
        content.innerHTML = innerDialog;
        modal.showModal();
        body.style.overflow = 'hidden';

        setTimeout(() => {
          const closeBtns = content.querySelectorAll('.policies-close');
          closeBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
              modal.close();
              body.style.overflow = 'auto';
            });
          });
        }, 100);
      })
      .catch((err) => {
        content.innerHTML = `<p class="text-red-500">내용을 불러오는 데 실패했습니다.</p>`;
        modal.showModal();
      });
  }

  // footer 버튼 이벤트 연결
  const policiesOpen = document.querySelectorAll('.policies-open');

  const files = ['/src/pages/policies/terms.html', '/src/pages/policies/privacy.html', '/src/pages/policies/location.html', '/src/pages/policies/legal.html', '/src/pages/policies/cctv.html'];

  policiesOpen.forEach((btn, idx) => {
    btn.addEventListener('click', () => openPolicyModal(files[idx]));
  });
});
