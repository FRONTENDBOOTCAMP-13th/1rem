// 원산지 모달창 - 최소 기능 코드
document.addEventListener('DOMContentLoaded', function () {
  // 1. DOM 요소 선택
  const showCoaModal = document.querySelector('#showcoamodal');
  const coaModal = document.querySelector('#coamodal');
  const modalClose = document.querySelector('#modalclose');
  const body = document.querySelector('body');

  // 3. 모달 열기 기능
  if (showCoaModal && coaModal) {
    showCoaModal.addEventListener('click', function () {
      // dialog 요소의 showModal 메서드 사용
      if (typeof coaModal.showModal === 'function') {
        coaModal.showModal();
        coaModal.style.display = 'flex';
        body.style.overflow = 'hidden';
      } else {
        // 대체 방법: 직접 표시
        coaModal.setAttribute('open', '');
      }
    });
  }

  // 4. 닫기 버튼 기능
  if (modalClose && coaModal) {
    modalClose.addEventListener('click', function () {
      // dialog 요소의 close 메서드 사용
      if (typeof coaModal.close === 'function') {
        coaModal.close();
        coaModal.style.display = 'none';
        body.style.overflow = 'auto';
      } else {
        // 대체 방법: 직접 숨김
        coaModal.removeAttribute('open');
      }
    });
  }
});
