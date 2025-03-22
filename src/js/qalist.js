document.addEventListener('DOMContentLoaded', function () {
  // DOM 선택 부분
  const buttons = document.querySelectorAll('button[id^="goTo"]');
  const sections = document.querySelectorAll('div[id]');
  const navItems = document.querySelectorAll('nav ul li');

  let isScrollingDisabled = false; // 스크롤 이벤트 비활성화 여부

  // 함수 구현 부분
  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.id.replace('goTo', '').toLowerCase();
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offset = window.matchMedia('(min-width: 1024px)').matches
        ? 204 // 1024px 이상일 때 204px
        : window.matchMedia('(min-width: 640px)').matches
          ? 142 // 640px 이상일 때 142px
          : 129; // 그 외는 129px

      const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - offset; // offset 여백 추가
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });

      updateActiveState(targetId);

      // 스크롤 이벤트 일시 중지 (1초 동안)
      isScrollingDisabled = true;
      setTimeout(() => {
        isScrollingDisabled = false;
      }, 1000);
    }
  };

  const updateActiveState = (activeId) => {
    let isAnyActive = false; // 활성화된 버튼이 있는지 확인하는 변수

    navItems.forEach((item) => {
      const button = item.querySelector('button');
      if (button) {
        const targetId = button.id.replace('goTo', '').toLowerCase();
        if (targetId === activeId) {
          isAnyActive = true; // 하나라도 활성화되면 true

          item.classList.remove('after:hidden');
          button.classList.add('text-ci');
          button.classList.remove('text-brown-0.5');
        } else {
          item.classList.add('after:hidden');
          button.classList.remove('text-ci');
          button.classList.add('text-brown-0.5');
        }
      }
    });
    // ✅ 모든 버튼이 비활성화된 경우 'delivery' 활성화
    if (!isAnyActive) {
      const deliveryItem = document.querySelector('button[id="goToDelivery"]')?.closest('li');
      if (deliveryItem) {
        deliveryItem.classList.remove('after:hidden');
        const deliveryButton = deliveryItem.querySelector('button');
        if (deliveryButton) {
          deliveryButton.classList.add('text-ci');
          deliveryButton.classList.remove('text-brown-0.5');
        }
      }
    }
  };

  const handleScroll = () => {
    if (isScrollingDisabled) return; // ✅ 클릭 후 일정 시간 동안 스크롤 이벤트 비활성화

    const offset = window.matchMedia('(min-width: 1024px)').matches
      ? 204 // 1024px 이상일 때 204px
      : window.matchMedia('(min-width: 640px)').matches
        ? 142 // 640px 이상일 때 142px
        : 129; // 그 외는 129px

    let activeId = null;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - offset;
      const sectionBottom = section.getBoundingClientRect().bottom - offset;

      if (sectionTop <= 0 && sectionBottom > 0) {
        activeId = section.id;
      }
    });

    if (activeId) {
      updateActiveState(activeId);
    }
  };

  // 이벤트 바인딩 부분
  buttons.forEach((button) => button.addEventListener('click', scrollToSection));
  window.addEventListener('scroll', handleScroll);
});
