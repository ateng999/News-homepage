document.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector('.menu');
	const close = document.querySelector('.close');
	const navBar = document.querySelector('.navi');
  
	menu.addEventListener('click', function() {
	  navBar.classList.add('show');
	});
  
	close.addEventListener('click', function() {
	  navBar.classList.remove('show');
	});
  });