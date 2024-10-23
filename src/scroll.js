// Знаходимо хедер
const header = document.getElementById('page-header');

// Додаємо подію прокручування
window.addEventListener('scroll', () => {
  // Перевіряємо, якщо сторінка прокручена більше ніж на 50px
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
