
const openBar = document.querySelector('.uil-bars');
const closeBar = document.querySelector('.uil-times');
const nav = document.querySelector('.nav-list');



openBar.addEventListener('click', () => {
  nav.style.display = 'block';
  if (nav.style.display === 'block') {
    openBar.style.display = 'none';
    closeBar.style.display = 'block';
  }
});

closeBar.addEventListener('click', () => {
  nav.style.display = 'none';
  if (nav.style.display === 'none') {
    openBar.style.display = 'block';
    closeBar.style.display = 'none';
  }
});