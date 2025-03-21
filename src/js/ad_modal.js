document.addEventListener('DOMContentLoaded', function () {
  // 필요한 요소들 가져오기
  const body = document.querySelector('body');
  const modal = document.querySelector('dialog.modal');
  const modalIframe = modal.querySelector('iframe');
  const modalTitle = modal.querySelector('.modal-footer h4');
  const modalCloseBtn = modal.querySelector('.modal-close');
  const modalOpenBtns = document.querySelectorAll('.modal-open');

  // 모달 열기 버튼에 이벤트 리스너 추가
  modalOpenBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      // 비디오 ID 가져오기 (rel 속성에서)
      const videoId = this.getAttribute('rel');

      // 비디오 제목 가져오기 (버튼의 부모의 형제요소인 h4에서)
      const videoTitle = this.closest('li').querySelector('h4').textContent;

      // iframe src 설정 (YouTube 임베드 URL)

      modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&amp;mute=1`;

      // 모달 제목과 iframe title 설정
      modalTitle.textContent = videoTitle;
      modalIframe.title = videoTitle;

      // 모달 열기
      modal.showModal();
      modal.style.display = 'flex';
      body.style.overflow = 'hidden';
    });
  });

  // 모달 닫기 버튼에 이벤트 리스너 추가
  modalCloseBtn.addEventListener('click', function () {
    // 모달 닫기
    modal.close();
    modal.style.display = 'none';
    body.style.overflow = 'auto';

    // iframe src 초기화 (리소스 절약 및 비디오 정지를 위함)
    setTimeout(() => {
      modalIframe.src = '';
    }, 100);
  });
});
