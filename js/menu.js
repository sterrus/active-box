(function() {
	const btn = document.getElementById('nav-hamburger'),
		  list = document.getElementById('nav-list'),
		  nav = document.getElementById('nav');
	
	btn.addEventListener('click', function() {
		if (list.classList.contains('active')) {
			list.classList.remove('active');
		} else {
			list.classList.add('active');
		}
	});
	
	window.addEventListener('scroll', function() {
		let currentPosition = pageYOffset;
		if (currentPosition > 80) {
			nav.classList.add('sticky');
		} else {
			nav.classList.remove('sticky');
		}
	});
})();