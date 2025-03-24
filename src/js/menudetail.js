// 원산지 모달창 - 최소 기능 코드
document.addEventListener('DOMContentLoaded', function () {
  // 1. DOM 요소 선택
  const showCoaModal = document.querySelector('#showcoamodal');
  const coaModal = document.querySelector('#coamodal');
  const modalClose = document.querySelector('#modalclose');

  // 2. 기능 확인용 콘솔 로그
  console.log('모달 버튼:', showCoaModal);
  console.log('모달:', coaModal);
  console.log('모달 닫기 버튼:', modalClose);

  // 3. 모달 열기 기능
  if (showCoaModal && coaModal) {
    showCoaModal.addEventListener('click', function () {
      console.log('모달 열기 버튼 클릭됨');
      // dialog 요소의 showModal 메서드 사용
      if (typeof coaModal.showModal === 'function') {
        coaModal.showModal();
      } else {
        // 대체 방법: 직접 표시
        coaModal.style.display = 'flex';
        coaModal.setAttribute('open', '');
      }
    });
  }

  // 4. 닫기 버튼 기능
  if (modalClose && coaModal) {
    modalClose.addEventListener('click', function () {
      console.log('모달 닫기 버튼 클릭됨');
      // dialog 요소의 close 메서드 사용
      if (typeof coaModal.close === 'function') {
        coaModal.close();
      } else {
        // 대체 방법: 직접 숨김
        coaModal.style.display = 'none';
        coaModal.removeAttribute('open');
      }
    });
  }
});
