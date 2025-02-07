export const getPhotographers = async () => {
	try{
		const response = await fetch('data/photographers.json');
		const data = await response.json();
		return data;
	}catch(e){
		console.error(e);
	}
}

export const getPhotographerById = async (id) => {
	const data = await getPhotographers();
	let photographer = data.photographers.find(photographer => photographer.id == id);
	let media = data.media.filter(media => media.photographerId == id);
	return {photographer, media};
}