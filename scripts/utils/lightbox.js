
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

export const navigationChevron = (media, i, photographerTemplate) => {
    const lightbox = document.querySelector('.lightbox');
    const chevronLeft = document.querySelector('.chevron-left');
    const chevronRight = document.querySelector('.chevron-right');

    const handlePrevious = () => {
        lightbox.innerHTML = '';
        if(i === 0) {
            i = 1;
        }
        photographerTemplate.displayLightbox(media, i - 1, photographerTemplate);
    };

    const handleNext = () => {
        lightbox.innerHTML = '';
        if(i === media.length - 1) {
            i = i - 1;
        }
        photographerTemplate.displayLightbox(media, i + 1, photographerTemplate);
    };

    chevronLeft.addEventListener('click', handlePrevious);
    chevronRight.addEventListener('click', handleNext);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            handlePrevious();
        } else if (e.key === 'ArrowRight') {
            handleNext();
        } else if (e.key === 'Escape') {
            console.log("fmewomoei")
            closeModalLightbox();
        }
    });
    
}