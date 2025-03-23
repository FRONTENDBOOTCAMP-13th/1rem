document.addEventListener('DOMContentLoaded', function () {
  // 버튼 역할을 하는 div 요소 선택
  const showCoaModal = document.querySelector('#showcoamodal');
  // 모달 요소 선택
  const coaModal = document.querySelector('#coamodal');

  // showCoaModal이 존재하면 이벤트 리스너 추가
  if (showCoaModal && coaModal) {
    showCoaModal.addEventListener('click', function () {
      // 모달 열기 전 body 스크롤 방지
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      // html과 body에 scroll-behavior 적용
      document.documentElement.style.scrollBehavior = 'smooth';

      // 모달 내부 스크롤 초기화
      setTimeout(() => {
        // 모달 자체를 상단으로 스크롤
        coaModal.scrollTop = 0;

        // 모달 내부의 콘텐츠 영역도 상단으로 스크롤
        const contentDivs = coaModal.querySelectorAll('div');
        contentDivs.forEach((div) => {
          div.scrollTop = 0;
        });
      }, 10);

      // 모달 열기
      coaModal.showModal();
    });

    // 모달의 확인 버튼 선택 및 이벤트 추가
    const confirmButton = coaModal.querySelector('a');
    if (confirmButton) {
      confirmButton.addEventListener('click', function (event) {
        event.preventDefault();
        closeModal();
      });
    }

    // 모달 밖 클릭 시 닫히도록 설정 - 방법 1: mousedown 이벤트 사용
    document.addEventListener('mousedown', function (event) {
      // 모달이 열려있고, 클릭된 요소가 모달 바깥이면 닫기
      if (coaModal.open && !coaModal.contains(event.target) && event.target !== coaModal) {
        closeModal();
      }
    });

    // 모달 밖 클릭 시 닫히도록 설정 - 방법 2: backdrop 클릭 감지
    coaModal.addEventListener('click', function (event) {
      // 클릭된 요소의 좌표가 모달 영역 밖인지 확인
      const rect = coaModal.getBoundingClientRect();
      const isInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;

      if (!isInDialog) {
        closeModal();
      }
    });

    // 모달이 닫힐 때 (확인 버튼 외의 방법으로 닫힐 경우도 대비)
    coaModal.addEventListener('close', function () {
      closeModal();
    });

    // Escape 키로 모달 닫기
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && coaModal.open) {
        closeModal();
      }
    });

    // 모달 닫기 함수
    function closeModal() {
      // body 스크롤 복원
      const scrollY = parseInt(document.body.style.top || '0') * -1;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      // scroll-behavior 원래대로 복원
      document.documentElement.style.scrollBehavior = '';

      // 원래 스크롤 위치로 복원
      window.scrollTo(0, scrollY);

      // 모달 닫기
      coaModal.close();
    }
  } else {
    console.error('모달 또는 버튼 요소를 찾을 수 없습니다.');
  }
});
