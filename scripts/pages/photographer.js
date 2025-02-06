//Mettre le code JavaScript lié à la page photographer.html

const sendDataForm = () => {
	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	console.log(`firstname: ${firstName} \nlastname: ${lastName} \nemail: ${email}\nmessage: ${message}`);
}

const totalLike = (media) => {
	let total = 0;
	media.forEach(media => {
		total += media.likes;
	});
	return total;
}

const displayMedia = (photographerTplt,media) => {
	const mediaSection = document.querySelector('.media');
	mediaSection.innerHTML = '';

	media.forEach((media, i) => {
		const mediaCard = photographerTplt.mediaCard(media);
		mediaSection.appendChild(mediaCard);
	});
}

const init = async () => {
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get('id');
	const photographerData = await getPhotographerById(id);
	console.log(photographerData);
	const photographerTplt = photographerTemplate(photographerData.photographer);
	photographerTplt.displayPhotographerData();
	photographerTplt.formContactTitle();
	photographerTplt.displayInfoPhotographer(totalLike(photographerData.media));
	displayMedia(photographerTplt,photographerData.media);
	photographerNavigation();
}

init();