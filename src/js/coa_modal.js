document.addEventListener('DOMContentLoaded', function () {
  // 버튼 역할을 하는 div 요소 선택
  const showCoaModal = document.querySelector('#showcoamodal');
  // 모달 요소 선택
  const coaModal = document.querySelector('#coamodal');

  // showCoaModal이 존재하면 이벤트 리스너 추가
  if (showCoaModal && coaModal) {
    showCoaModal.addEventListener('click', function () {
      // 모달 열기 전에 body의 스크롤 방지
      document.body.style.overflow = 'hidden';
      // 모달 내부 스크롤 위치 상단으로 초기화
      coaModal.scrollTop = 0;
      // 모달 열기
      coaModal.showModal();
    });

    // 모달의 확인 버튼 선택 및 이벤트 추가
    const confirmButton = coaModal.querySelector('a');
    if (confirmButton) {
      confirmButton.addEventListener('click', function (event) {
        event.preventDefault();
        // 모달 닫기
        coaModal.close();
        // 모달이 닫힐 때 body 스크롤 다시 활성화
        document.body.style.overflow = '';
      });
    }

    // 모달이 닫힐 때 (확인 버튼 외의 방법으로 닫힐 경우도 대비)
    coaModal.addEventListener('close', function () {
      // body 스크롤 다시 활성화
      document.body.style.overflow = '';
    });
  } else {
    console.error('모달 또는 버튼 요소를 찾을 수 없습니다.');
  }
});
