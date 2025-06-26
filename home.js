var menuBtn = document.querySelector('.menu-btn');
var sideMenu = document.getElementById('side-menu');

menuBtn.addEventListener('click', function() {
  sideMenu.classList.toggle('open');
});