function scrollRight() {
    const articles = document.getElementById("articles-container");
    const first_article = articles.querySelector(".article");
    const scrollBy = first_article.offsetWidth + 32;
    articles.scrollBy({
        left: scrollBy,
        behavior: "smooth"
    });
}

const rightButton =  document.getElementById("articles-right");
rightButton.addEventListener("click", scrollRight);


function scrollLeft() {
    const articles = document.getElementById("articles-container");
    const first_article = articles.querySelector(".article");
    const scrollBy = first_article.offsetWidth + 32;
    articles.scrollBy({
        left: -scrollBy,
        behavior: "smooth"
    });
}

const leftButton =  document.getElementById("articles-left");
leftButton.addEventListener("click", scrollLeft);