(function initModal() {

  function showPopup() {
    modalComponents.classList.toggle("modal--open");
  }
  const modalComponents = document.querySelector('.modal');
  const openModalButton = document.querySelector('main .button');
  const closeModalButton = modalComponents.querySelector('.button');

  openModalButton.onclick = showPopup;
  closeModalButton.onclick = showPopup;
})();
