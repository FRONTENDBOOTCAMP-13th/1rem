document.addEventListener('DOMContentLoaded', function () {
  // 버튼 역할을 하는 div 요소 선택
  const showCoaModal = document.querySelector('#showcoamodal');

  // 모달 요소 선택
  const coaModal = document.querySelector('#coamodal');

  // showCoaModal이 존재하면 이벤트 리스너 추가
  if (showCoaModal && coaModal) {
    showCoaModal.addEventListener('click', function () {
      // 모달 열기
      coaModal.showModal();
    });

    // 모달의 확인 버튼 선택 및 이벤트 추가
    const confirmButton = coaModal.querySelector('a');
    if (confirmButton) {
      confirmButton.addEventListener('click', function (event) {
        event.preventDefault();
        coaModal.close();
      });
    }
  } else {
    console.error('모달 또는 버튼 요소를 찾을 수 없습니다.');
  }
});
