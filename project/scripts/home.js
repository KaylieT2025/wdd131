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

const sharkInfo = {

    type: "General Sharks",
    description: "Sharks are cartilaginous fish that have existed for over 400 million years."
};

const sharkFacts= [

    "Sharks do not have bones their skeletons are made of cartilage.",
    "Some sharks can live over 70 years.",
    "Sharks replace thousands of teeth throughout their lifetime.",
    "The whale shark is the largest shark species in the world.",
    "Some sharks glow in the dark (bioluminescence)."
];

let currentIndex = 0;
const factDisplay = document.querySelector("#fact-display");
const factButton = document.querySelector("#fact-button");

function showFact(index) {
    
    const fact = sharkFacts[index];
    factDisplay.textContent = `🦈 ${sharkInfo.type}: ${fact}`;
    localStorage.setItem("lastFact", index);
}

const savedIndex = localStorage.getItem("lastFact");

if (savedIndex != null) {
    
    currentIndex = Number(savedIndex);
    showFact(currentIndex);
}

factButton.addEventListener("click", () => {

    currentIndex++;
    if (currentIndex >= sharkFacts.length) {
        currentIndex = 0;
    }
    showFact(currentIndex);
})

document.querySelector("#feedback-form").addEventListener("submit", (e) => {

    e.preventDefault();
    alert("Message Sent");
});