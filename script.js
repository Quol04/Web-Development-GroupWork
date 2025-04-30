
const openBar = document.querySelector('.uil-bars');
const closeBar = document.querySelector('.uil-times');
const nav = document.querySelector('.nav-list');
const navlinks = document.querySelector('.nav-list a');



openBar.addEventListener('click', () => {
  nav.style.display = 'inline-block';
  // if (nav.style.display === 'block') {
    openBar.style.display = 'none';
    closeBar.style.display = 'inline-block';
  // }
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
  // if (nav.style.display === 'none') {
    openBar.style.display = 'inline-block';
    closeBar.style.display = 'none';
  // }
});