(function initSearchForm() {
  const formElement = document.querySelector('.form');
  const buttonElement = formElement.querySelector('.form__search');

  const getPhase = () => {
    const inputElement = formElement.querySelector('.form__input');
    return inputElement.value.toLowerCase();
  }

  const filter = (searchPhrase) => {
    const tableElement = document.querySelector('.table');
    const cellElement = tableElement.querySelectorAll('.table__cell');

    cellElement.forEach(cell => {
      cell.parentElement.classList.add('table__row--hide');
      if (cell.textContent.toLowerCase().includes(searchPhrase)) {
        cell.parentElement.classList.remove('table__row--hide');
      }
    })
  }

  const filterTable = (e) => {
    e.preventDefault();
    filter(getPhase());
  }

  buttonElement.addEventListener('click', filterTable);
})();
