
export const closeModalLightbox = () => {
	const modal = document.getElementById("lightbox-modal");
	modal.setAttribute("aria-hidden", "true");
	modal.style.display = "none";
}

export const displayModalLightbox = () => {
	const modal = document.getElementById("lightbox-modal");
	modal.setAttribute("aria-hidden", "false");
	modal.style.display = "block";
}

export const navigationChevronOnClick = (media, i, photographerTemplate) => {
	const lightbox = document.querySelector('.lightbox');
	const chevronLeft = document.querySelector('.chevron-left');
	const chevronRight = document.querySelector('.chevron-right');

	chevronLeft.addEventListener('click', () => {
		lightbox.innerHTML = '';
		console.log(i);
		if(i === 0) {
			i = 1;
		}
		photographerTemplate.displayLightbox(media, i - 1, photographerTemplate);
	});
	chevronRight.addEventListener('click', () => {
		lightbox.innerHTML = '';
		if(i === media.length - 1) {
			i = i -1;
		}
		photographerTemplate.displayLightbox(media, i + 1, photographerTemplate);
	});
}