(function() {
	let images = document.getElementsByClassName('carousel-image'),
		quotes = document.querySelectorAll('.quotes__text'),
		bubbles = document.getElementsByClassName('bubble__btn'),
		carouselContainer = document.getElementById('carousel'),
		currentQuote = 0,
		width = 997;

	function switchQuote() {
		carouselContainer.style.left = -width * currentQuote + 'px';
		let activeQuotes = document.querySelectorAll('.quotes__text.active');
		for (i = 0; i < activeQuotes.length; i++) {
			activeQuotes[i].classList.remove('active');
		}
		quotes[currentQuote].classList.add('active');
		let activeBubbles = document.querySelectorAll('.bubble__btn.active');
		for (i = 0; i < activeBubbles.length; i++) {
			activeBubbles[i].classList.remove('active');
		}
		bubbles[currentQuote].classList.add('active');
	}

	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].addEventListener('click', function() {
			currentQuote = i;
			switchQuote();
		});
	}
})();