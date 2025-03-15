document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", () => {
        if (navMenu.style.display === "flex") {
            navMenu.style.display = "none";
            menuBtn.textContent = "☰";
        } else {
            navMenu.style.display = "flex";
            menuBtn.textContent = "✖";
        }
    });

    // Dynamic year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Last modified date
    document.getElementById("last-modified").textContent = document.lastModified;
});
