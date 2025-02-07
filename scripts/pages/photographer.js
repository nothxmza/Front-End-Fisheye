//Mettre le code JavaScript lié à la page photographer.html
import { photographerTemplate } from "../templates/photographer.js";
import { getPhotographerById } from "../utils/api.js";
import { photographerNavigation } from "../utils/keyboardNavigation.js";

const sendDataForm = () => {
	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	console.log(`firstname: ${firstName} \nlastname: ${lastName} \nemail: ${email}\nmessage: ${message}`);
}

window.sendDataForm = sendDataForm;

const totalLike = (media) => {
	let total = 0;
	media.forEach(media => {
		total += media.likes;
	});
	return total;
}

const displayMedia = (photographerTplt,photographerMedia, filter) => {
	const mediaSection = document.querySelector('.media');
	mediaSection.innerHTML = '';

	const updateTotalLikes = () => {
		const totalLikes = document.querySelector('.total-likes');
		totalLikes.textContent = totalLike(photographerMedia);
	}

	if(filter){
		photographerMedia.forEach((media, i) => {
		const mediaCard = photographerTplt.mediaCard(media,photographerMedia,i, photographerTplt, updateTotalLikes);
		mediaSection.appendChild(mediaCard);
	});
	}else{
		let media = photographerMedia.sort((a, b) => b.likes - a.likes);
		media.forEach((media, i) => {
			const mediaCard = photographerTplt.mediaCard(media,photographerMedia,i, photographerTplt, updateTotalLikes);
			mediaSection.appendChild(mediaCard);
		});
	}
}

const hiddenList = () => {
		const listFilter = document.getElementById('listFilter');
		const btnFilter = document.querySelector('.filterToggle');
		listFilter.classList.add('hidden');
		btnFilter.classList.remove('hidden');
	}
	window.hiddenList = hiddenList;
	
	const showList = () => {
		const listFilter = document.getElementById('listFilter');
		const btnFilter = document.querySelector('.filterToggle');
		listFilter.classList.remove('hidden');
		btnFilter.classList.add('hidden');
	}
	window.showList = showList;

 const fitlerMedia = (media, filter,photographerTplt) => {
	if(filter === 'popular') {
		media.sort((a, b) => b.likes - a.likes);
	} else if(filter === 'date') {
		media.sort((a, b) => new Date(b.date) - new Date(a.date));
	}else if(filter === 'title') {
		media.sort((a, b) => a.title.localeCompare(b.title));
	}
	console.log(media);
	displayMedia(photographerTplt,media, true);
 }



const customSelect = (media,photographerTplt) => {
	const button = document.getElementById("select-button");
	const options = document.getElementById("select-options");
	const optionItems = options.querySelectorAll("li");

	button.addEventListener("click", () => {
		options.classList.remove("hidden");
		button.setAttribute("aria-expanded", "true");
		button.classList.add("active");

		optionItems.forEach(item => {
			if (item.classList.contains("selected")) {
				item.classList.add("hidden");
			} else {
				item.classList.remove("hidden");
			}
		});
	});
	optionItems.forEach(item => {
		item.addEventListener("click", () => {
			button.innerHTML = `${item.textContent} <i class="fa-solid fa-chevron-down chevron-select"></i>`;
			button.setAttribute("aria-expanded", "false");
			button.classList.remove("active");

			options.classList.add("hidden");
			options.setAttribute("aria-activedescendant", item.id);

			optionItems.forEach((i) =>{
				i.classList.remove("selected");
				i.setAttribute("aria-selected", "false");
			});

			item.classList.add("selected");
			item.setAttribute("aria-selected", "true");

			fitlerMedia(media, item.id,photographerTplt);
			updateBorders();
		});
	});

	const updateBorders = () => {
		optionItems.forEach(li => li.classList.remove("last-visible"));
		const visibleItems = [...optionItems].filter(li => !li.classList.contains("selected"));
		visibleItems[visibleItems.length - 1].classList.add("last-visible");
	};
	updateBorders();
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
	displayMedia(photographerTplt,photographerData.media, false);
	photographerNavigation();
	customSelect(photographerData.media,photographerTplt);
}

init();