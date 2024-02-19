function scrollDown() {
  window.scrollBy(0, 300); // Прокрутка сайта на 200px вниз
}
function scrollUp() {
  window.scrollBy(0, -300); // Прокрутка сайта на 200px вверх
}

// Скролл к блоку main
function scrollToMain() {
  window.scrollTo({
    top: 300,
    behavior: 'smooth'
  });
}