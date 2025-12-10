const navBar = document.getElementById('navBar');
const hideBtn = document.getElementById('hideBtn');
const showBtn = document.getElementById('showBtn');

hideBtn.addEventListener('click', () => {
  navBar.style.display = 'none';
  hideBtn.classList.add('hidden');
  showBtn.classList.remove('hidden');
});

showBtn.addEventListener('click', () => {
  navBar.style.display = 'flex';
  showBtn.classList.add('hidden');
  hideBtn.classList.remove('hidden');
});
/* ------------------------- */
