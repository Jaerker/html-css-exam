// javascript for remove class on scroll top and add on scroll down 
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let header = this.document.querySelector("#header");

    if (scrollTop > 150) {
        header.classList.remove("header--scrolled-up");
        header.classList.add("header--scrolled-down");
    }
    else {
        header.classList.add("header--scrolled-up");
        header.classList.remove("header--scrolled-down");

    }
});