//For Last Modified date.
const d = new Date();
document.getElementById("current-year").innerHTML = d.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified:" + document.lastModified;

//Static variables
const temperature = 27; //C
const windSpeed = 15; //km/h

//Wind chill
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6125 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ) + toFixed(1);
}

//Condition check
let windChill;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + "℃";
}
else {
    windChill = "N/A";
}

//Showing results
document.getElementById("chill").textContent = windChill;