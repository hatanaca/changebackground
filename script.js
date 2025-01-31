document.querySelectorAll('.color-btn').forEach(button => {
	button.addEventListener('click', () => {
		let color = button.getAttribute('data-color');
		if (color === 'random') {
			color = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
		}
		document.body.style.backgroundColor = color;
	});
});
