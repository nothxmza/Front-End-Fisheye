//Mettre le code JavaScript lié à la page photographer.html

const init = async () => {
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get('id');
	const photographer = await getPhotographerById(id);
	console.log(photographer);
}

init();