'use strict';
document.querySelectorAll('.card').forEach(card => {
	card.addEventListener('click',function () {
		card.classList.toggle('is-flipped');
		
	});
});
