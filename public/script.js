document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const burgerToggle = document.getElementById("burger-toggle");

    // Åbner burger-menuen
    burgerToggle.addEventListener("click", function () {
        burgerMenu.style.display = burgerMenu.style.display === "block" ? "none" : "block";
    });

    // Lukker menuen når et link klikkes
    function closeMenu() {
        burgerMenu.style.display = "none";
    }

    // Tilføjer closeMenu() til alle links i burger-menuen
    document.querySelectorAll("#burger-menu a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});
