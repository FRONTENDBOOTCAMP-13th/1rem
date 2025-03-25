document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('notice');
  const closeModal = document.getElementById('closeButton');
  const dontShowTodayButton = document.getElementById('dontShowTodayButton');

  // 현재 날짜를 기준으로 하루 동안 모달을 열지 않도록 설정
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD 형식
  const dontShowToday = localStorage.getItem('dontShowToday');

  // 페이지 로드 시 모달 열기 여부 확인
  if (dontShowToday !== today) {
    modal.showModal();
  }

  // 닫기 버튼 클릭 시 모달 닫기
  closeModal.addEventListener('click', () => {
    modal.close();
  });

  // "오늘 하루 안보기" 버튼 클릭 시 로컬 스토리지에 날짜 저장
  dontShowTodayButton.addEventListener('click', () => {
    localStorage.setItem('dontShowToday', today);
    modal.close();
  });
  // 아코디언 메뉴 기능 구현
  document.querySelectorAll('.accordion-header').forEach((button) => {
    button.addEventListener('click', () => {
      // 현재 아이템의 콘텐츠 요소
      const content = button.nextElementSibling;
      // 현재 아이템의 아이콘
      const icon = button.querySelector('.accordion-icon');

      // 아코디언 열기/닫기 토글
      if (content.classList.contains('active')) {
        // 닫기
        content.classList.remove('active');
        content.style.maxHeight = '0px';
        icon.classList.remove('rotate-45');
      } else {
        // 열기
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-45');
      }

      // 단일 아코디언 (한 번에 하나만 열림)
      // 아래 주석을 해제하면 한 번에 하나의 항목만 열립니다
      /*
              document.querySelectorAll('.accordion-content').forEach(item => {
                  if (item !== content && item.classList.contains('active')) {
                      item.classList.remove('active');
                      item.style.maxHeight = '0px';
                      item.previousElementSibling.querySelector('.accordion-icon').classList.remove('rotate-45');
                  }
              });
              */
    });
  });
});
