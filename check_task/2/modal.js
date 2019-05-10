/*!
 * daftcode-practices v1.0.0
 * Solution of recruitment tasks for daftcode practices 2019
 * (c) 2019
 * MIT License
 * https://github.com/sebastianwesolowski/daftcode-practices
 */

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
