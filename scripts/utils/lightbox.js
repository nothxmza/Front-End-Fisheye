import { MediaFactory } from "../factory/media.js";

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

const  updateMediaContent = (media, index) =>  {
    const middleLightbox = document.querySelector('.middle-lightbox');
    middleLightbox.innerHTML = '';
    const mediaElement = MediaFactory.createMedia(media[index], true);
    middleLightbox.appendChild(mediaElement.render());
}

export const navigationChevron = (media, i) => {
    const chevronLeft = document.querySelector('.chevron-left');
    const chevronRight = document.querySelector('.chevron-right');

    const handlePrevious = () => {
        if(i === 0){
            i = media.length - 1;
        }
        else{
            i--;
        }
        updateMediaContent(media, i);
    };

    const handleNext = () => {
        if(i === media.length - 1){
            i = 0;
        }
        else{
            i++;
        }
        updateMediaContent(media, i);
    };

    chevronLeft.addEventListener('click', handlePrevious);
    chevronRight.addEventListener('click', handleNext);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft'){
            handlePrevious();
        }
        else if (e.key === 'ArrowRight'){
            handleNext();
        }
        else if (e.key === 'Escape'){
            closeModalLightbox();
        }
    });
};