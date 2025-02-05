const homeNavigation = () => {
	const cards = document.querySelectorAll('.photographer_section a');
	if(cards.length === 0)
		return;

	let currentIndex = 0;
	
	const updateFocus = (i) => {
		cards[i].focus();
	}

	document.addEventListener('keydown', (e) => {
		if(e.key === 'ArrowRight'){
			if(currentIndex + 1 < cards.length){
				currentIndex++;
			}else{
				currentIndex = 0;
			}
			updateFocus(currentIndex);
		}else if(e.key === 'ArrowLeft'){
			if(currentIndex - 1 >= 0){
				currentIndex--;
			}else{
				currentIndex = cards.length - 1;
			}
			updateFocus(currentIndex);
		}else if(e.key === 'Enter'){
			cards[i].click();
		}
	});
	updateFocus(currentIndex);
}