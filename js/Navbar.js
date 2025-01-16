document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const toggler = document.querySelector(".navbar-toggler");
    
    toggler.addEventListener("click", function () {
        if (navbar.classList.contains("bg-dark-opacity")) {
            navbar.classList.remove("bg-dark-opacity");
        } else {
            navbar.classList.add("bg-dark-opacity");
        }
    });
});