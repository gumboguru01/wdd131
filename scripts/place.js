// Dynamic Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
const temp = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);

function calculateWindChill(t, s) {
    return Math.round(13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16));
}

const windChill = (temp <= 10 && windSpeed > 4.8) ? calculateWindChill(temp, windSpeed) + "°C" : "N/A";
document.getElementById("windchill").textContent = windChill;
