// Анимация загрузки сайта
window.onload = function () {
  document.querySelector(".content").style.display = "block";
  document.querySelector(".spinner").style.display = "none"; 
}


// Функция нажатия на стрелку 
function scrollDown() {
  window.scrollBy(0, 300); // Прокрутка сайта на 200px вниз
}
function scrollUp() {
  window.scrollBy(0, -300); // Прокрутка сайта на 200px вверх
}

// Скролл к блоку main по нажатию на "Начало"
function scrollToMain() {
  window.scrollTo({
    top: 300,
    behavior: 'smooth'
  });
}

// Паралакс эффект для активного фона
const bgActive = document.querySelector('.bg-active');
const bgActiveFog01 = document.querySelector('.bg-active--fog01');

document.addEventListener('mousemove', function (e) {
  const posX = e.clientX / window.innerWidth / 1.5;
  const posY = e.clientY / window.innerHeight / 1.5;
  bgActive.style.translate = `${posX}% ${posY}%`;
  bgActiveFog01.style.translate = `${posX}% ${posY}%`;
});
