const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

/* let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);
document.getElementById("reviewCounter").textContent = count; */

const select = document.getElementById("productName");

if (select) {
    products.forEach(item => {

        const opt = document.createElement("option");
        opt.value = item.id;
        opt.textContent = item.name;
        select.appendChild(opt);
    });
}

let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);
document.getElementById("reviewCounter").textContent = count;

const d = new Date();
document.getElementById("current-year").innerHTML = d.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified:" + document.lastModified;

const year = document.getElementById("current-year");
if (year) {
    
    year.textContent = new Date().getFullYear();
}

const lastModified = document.getElementById("lastModified");
if (modified) {
    
    modified.textContent = "Last Modified: " + document.lastModified;
}