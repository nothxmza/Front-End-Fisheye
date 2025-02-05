function photographerTemplate(data) {
    const { id, name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const headerCard = document.createElement( 'div' );
        headerCard.classList.add( 'header_card' );
        const link = document.createElement( 'a' );
        link.setAttribute("href", `photographer.html?id=${id}`);
        link.setAttribute("aria-label", `Voir la page de ${name}`);
        link.setAttribute("role", "link");
        link.setAttribute("tabindex", "0");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        headerCard.appendChild(img);
        headerCard.appendChild(h2);
        link.appendChild(headerCard);
        article.appendChild(link);

        const footerCard = document.createElement( 'div' );
        footerCard.classList.add( 'footer_card' );
        const position = document.createElement( 'p' );
        position.classList.add( 'country' );
        position.textContent = `${city}, ${country}`;
        const p = document.createElement( 'p' );
        p.textContent = tagline;
        const span = document.createElement( 'span' );
        span.textContent = `${price}€/jour`;
        footerCard.appendChild(position);
        footerCard.appendChild(p);
        footerCard.appendChild(span);
        article.appendChild(footerCard);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}