document.addEventListener('DOMContentLoaded', () => {
  //화면 요소 로드 후 함수 실행 ( 초기화 )
  const buttons = document.querySelectorAll('.accordion-button');

  //클래스에 accrodion-button이 있는 요소들을 모두 찾아서 버튼에 이벤트 리스너를 추가
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // 부모 <li>에서 서브메뉴 찾기
      const submenu = button.closest('li').querySelector('.accordion-submenu');

      // 서브메뉴가 있으면 토글
      if (submenu) {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', !isExpanded);
        button.style.transform = !isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';

        if (!isExpanded) {
          // 요소의 실제 높이를 계산
          const height = submenu.scrollHeight;
          // 실제 높이로 설정
          submenu.style.height = `${height}px`;
          submenu.classList.remove('h-0');
        } else {
          // 닫기: 우선 높이를 0으로 설정
          submenu.style.height = '0px';
          submenu.classList.add('h-0');
        }
      }
    });
  });
});
