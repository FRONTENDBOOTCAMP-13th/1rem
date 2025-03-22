document.addEventListener('DOMContentLoaded', function () {
  // 가맹 신청서 (모달창)
  // DOM 선택 부분
  const showApplicationForm = document.querySelector('#showApplicationForm');
  const closeApplicationForm = document.querySelector('#closeApplicationForm');
  const closeApplicationForm2 = document.querySelector('#cancelButton');
  const applicationForm = document.querySelector('#applicationForm');

  // 함수 구현 부분
  const openDialog = () => applicationForm.showModal();
  const closeDialog = () => applicationForm.close();

  // 이벤트 바인딩 부분
  showApplicationForm.addEventListener('click', openDialog);
  closeApplicationForm.addEventListener('click', closeDialog);
  closeApplicationForm2.addEventListener('click', closeDialog);

  // 메뉴 이동
  // DOM 선택 부분
  const goToMenu1 = document.querySelector('#goToMenu1');
  const menu1 = document.querySelector('#menu1');
  const goToMenu2 = document.querySelector('#goToMenu2');
  const menu2 = document.querySelector('#menu2');
  const goToMenu3 = document.querySelector('#goToMenu3');
  const menu3 = document.querySelector('#menu3');

  // 함수 구현 부분
  const scrollToMenu = (menu) => {
    const offset = window.matchMedia('(min-width: 1024px)').matches ? 98 : 56; // lg 이상일 때 98px, 그 외 56px
    const offsetTop = menu.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  // 이벤트 바인딩 부분
  goToMenu1.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToMenu(menu1);
  });

  goToMenu2.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToMenu(menu2);
  });

  goToMenu3.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToMenu(menu3);
  });
});
