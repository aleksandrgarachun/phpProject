document.addEventListener('DOMContentLoaded', () => {
  // Знаходимо всі необхідні елементи
  const openModalButton = document.querySelector('.header-menu-btn.menu-toggle'); // Кнопка відкриття
  const closeModalButton = document.querySelector('.modal-close'); // Кнопка закриття
  const backdrop = document.querySelector('.backdrop'); // Задній фон модального вікна

  if (openModalButton && backdrop) {
    // Відкрити модальне вікно
    openModalButton.addEventListener('click', () => {
      backdrop.classList.add('is-open'); // Додаємо клас "is-open"
    });
  }

  if (closeModalButton && backdrop) {
    // Закрити модальне вікно при натисканні на кнопку закриття
    closeModalButton.addEventListener('click', () => {
      backdrop.classList.remove('is-open'); // Видаляємо клас "is-open"
    });
  }

  // Закрити модальне вікно при кліку на backdrop
  window.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      backdrop.classList.remove('is-open');
    }
  });
});
