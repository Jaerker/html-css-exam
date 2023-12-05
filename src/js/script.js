// javascript for remove class on scroll top and add on scroll down 
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let header = this.document.querySelector("#header");

    if (scrollTop > 250) {
        header.classList.remove("header");
        header.classList.add("header--scrolled-down");
    }
    else {
        header.classList.add("header");
        header.classList.remove("header--scrolled-down");

    }
});