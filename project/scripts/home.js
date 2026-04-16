const button = document.querySelector("#hamburger-menu");
const nav = document.querySelector("nav ul");

button.addEventListener("click", () => {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        
        button.textContent = "❌";
    }
    else {
        button.textContent = "☰";
    }
});