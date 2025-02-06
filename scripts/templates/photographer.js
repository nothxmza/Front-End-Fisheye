function photographerTemplate(data) {
    console.log(data);
    const { id, name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const headerCard = document.createElement('div');
        headerCard.classList.add('header_card');
        const link = document.createElement('a');
        link.setAttribute("href", `photographer.html?id=${id}`);
        link.setAttribute("aria-label", `Voir la page de ${name}`);
        link.setAttribute("role", "link");
        link.setAttribute("tabindex", "0");
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        headerCard.appendChild(img);
        headerCard.appendChild(h2);
        link.appendChild(headerCard);
        article.appendChild(link);

        const footerCard = document.createElement('div');
        footerCard.classList.add('footer_card');
        const position = document.createElement('p');
        position.classList.add('country');
        position.textContent = `${city}, ${country}`;
        const p = document.createElement('p');
        p.textContent = tagline;
        const span = document.createElement('span');
        span.textContent = `${price}€/jour`;
        footerCard.appendChild(position);
        footerCard.appendChild(p);
        footerCard.appendChild(span);
        article.appendChild(footerCard);

        return (article);
    }

    function displayPhotographerData(){
        const leftHeader = document.querySelector('.photograph-header-left');
        const midleHeader = document.querySelector('.photograph-header-middle');
        const rightHeader = document.querySelector('.photograph-header-right');

        const title = document.createElement('h1');
        title.textContent = name;
        title.setAttribute('role', 'heading');
        const location = document.createElement('p');
        location.classList.add('location');
        location.textContent = `${city}, ${country}`;
        const taglineP = document.createElement('p');
        taglineP.classList.add('tagline');
        taglineP.textContent = tagline;

        const contactButton = document.createElement('button');
        contactButton.classList.add('contact_button', 'focusable');
        contactButton.textContent = 'Contactez-moi';
        contactButton.setAttribute('aria-label', `Contactez ${name}`);
        contactButton.setAttribute('role', 'button');
        contactButton.setAttribute('tabindex', '0');
        contactButton.addEventListener('click', () => {
            console.log("ok")
            displayModal();
        });

        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

        leftHeader.appendChild(title);
        leftHeader.appendChild(location);
        leftHeader.appendChild(taglineP);
        midleHeader.appendChild(contactButton);
        rightHeader.appendChild(img);

        document.querySelector('.photograph-header').appendChild(leftHeader);
        document.querySelector('.photograph-header').appendChild(midleHeader);
        document.querySelector('.photograph-header').appendChild(rightHeader);
    }

    function formContactTitle () {
        const headerTitle = document.querySelector('.modal-header-title');
        console.log(name,"icicii")
        const namePhotograph = document.createElement('h2');
        namePhotograph.textContent = name;
        namePhotograph.setAttribute('role', 'heading');
        headerTitle.appendChild(namePhotograph);
    }

    function displayInfoPhotographer(totalLike) {
	    const info = document.querySelector('.info');
        const infoPhotograph = document.createElement('div');
        infoPhotograph.classList.add('info-photographer');
        const leftInfo = document.createElement('div');
        leftInfo.classList.add('left-info');
        const likes = document.createElement('p');
        likes.classList.add('total-likes');
        likes.textContent = totalLike;
        const heart = document.createElement('i');
        heart.classList.add('fa-solid', 'fa-heart');
        heart.setAttribute('aria-label', 'likes');
        leftInfo.appendChild(likes);
        leftInfo.appendChild(heart);
        const priceInfo = document.createElement('p');
        priceInfo.textContent = `${price}€/jour`;
        infoPhotograph.appendChild(leftInfo);
        infoPhotograph.appendChild(priceInfo);

        info.appendChild(infoPhotograph);
    }

    function mediaCard(media){
        const card = document.createElement('article');
        card.classList.add('card');
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', media.title);

        const cardMedia = document.createElement('div');
        cardMedia.classList.add('card-media');
        const mediaElement = MediaFactory.createMedia(media);
        cardMedia.appendChild(mediaElement.render());

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        const title = document.createElement('h2');
        title.textContent = media.title;
        cardContent.appendChild(title);
        const cardLikes = document.createElement('div');
        cardLikes.classList.add('card-likes');
        const likes = document.createElement('p');
        likes.textContent = media.likes;
        cardLikes.appendChild(likes);
        const heart = document.createElement('i');
        heart.classList.add('fa-solid', 'fa-heart');
        heart.setAttribute('aria-label', 'likes');
        
    
        cardLikes.appendChild(heart);
        cardContent.appendChild(cardLikes);
        card.appendChild(cardMedia);
        card.appendChild(cardContent);
    
        return card;
    }

    return { name, picture, getUserCardDOM, displayPhotographerData, formContactTitle, displayInfoPhotographer, mediaCard };
}