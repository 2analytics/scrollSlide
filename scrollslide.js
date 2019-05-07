function scrollSlide({ element = null, padding = 0 }) {
    if (padding.includes("%")) {
        padding = padding.replace("%", "");
        padding = document.body.clientWidth / (100 / padding);
    }else {
        padding = parseInt(padding.replace("px", ""));
    }

    window.addEventListener("scroll", () => {
        element.style.marginLeft = -window.scrollY + "px";
        element.style.paddingRight = window.scrollY + (padding) + "px";
    });
}
