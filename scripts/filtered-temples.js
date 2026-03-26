//For Last Modified date.
const d = new Date();
document.getElementById("current-year").innerHTML = d.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified:" + document.lastModified;

//For hamburger menu.

const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu")

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});