const button = document.querySelector('.btn');
const menu = document.querySelector('.menu');
button.addEventListener('click', () => {
	button.classList.toggle('freeze')
	menu.classList.toggle('show-menu')
})
