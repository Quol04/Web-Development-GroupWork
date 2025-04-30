
const openBar = document.querySelector('.uil-bars');
const closeBar = document.querySelector('.uil-times');
const nav = document.querySelector('.nav-list');
const navlinks = document.querySelectorAll('.nav-list a');



openBar.addEventListener('click', () => {
  nav.style.display = 'inline-block';
  openBar.style.display = 'none';
  closeBar.style.display = 'inline-block';

  navlinks.forEach(item => {
    item.addEventListener('click', () => {
      nav.style.display = 'none';          // Hide the menu
      openBar.style.display = 'inline-block'; // Show the hamburger icon
      closeBar.style.display = 'none';      // Hide the close icon
    });
  });
});

closeBar.addEventListener('click', () => {
  nav.style.display = 'none';
  openBar.style.display = 'inline-block';
  closeBar.style.display = 'none';
 
});

//dark-mode
const darkMode = document.querySelector('#dark-mode');
const lightMode = document.querySelector('#light-mode');
const body = document.querySelector('body');


darkMode.addEventListener('click', () => { 
  body.classList.toggle('dark-mode');
  darkMode.style.display = 'none';
  lightMode.style.display = 'block';
  
});

lightMode.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  lightMode.style.display = 'none';
  darkMode.style.display = 'block';
  
});

