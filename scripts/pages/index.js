   import { getPhotographers } from "../utils/api.js";
   import { photographerTemplate } from "../templates/photographer.js";
    import { homeNavigation } from "../utils/keyboardNavigation.js";
   
   async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
        homeNavigation();
    }
    
    init();
    
