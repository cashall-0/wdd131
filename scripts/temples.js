document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    const hamburger = document.getElementById("hamburger");
    const navUl = document.querySelector("nav ul");

    hamburger.addEventListener("click", function() {
        navUl.classList.toggle("show");
        hamburger.textContent = navUl.classList.contains("show") ? "X" : "☰";
    });
});
