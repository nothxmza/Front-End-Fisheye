import {displayMedia} from '../pages/photographer.js';

export const customSelect = (media,photographerTplt) => {
	const button = document.getElementById("select-button");
	const options = document.getElementById("select-options");
	const optionItems = options.querySelectorAll("li");

	button.addEventListener("click", () => {
		options.classList.remove("hidden");
		button.setAttribute("aria-expanded", "true");
		button.classList.add("active");

		//hide item by default
		optionItems.forEach(item => {
			if (item.classList.contains("selected")) {
				item.classList.add("hidden");
			} else {
				item.classList.remove("hidden");
			}
		});

		//close the select by clicking again on the button
		button.addEventListener("click", () => {
			options.classList.toggle("hidden");
			button.classList.toggle("active");
		});
	});
	
	optionItems.forEach(item => {
		item.setAttribute("tabindex", "0");

		//select with space
		item.addEventListener("keydown", (e) => {
			if (e.key === "Enter") {
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

                fitlerMedia(media, item.id, photographerTplt);
                updateBorders();
                button.focus();
            }		
        });

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