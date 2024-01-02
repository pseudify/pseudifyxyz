document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const buttonsContainer = document.getElementById("buttons-container");

    hamburgerIcon.addEventListener("click", function () {
        buttonsContainer.classList.toggle("active");
        hamburgerIcon.classList.toggle("rotate");
    });
});

