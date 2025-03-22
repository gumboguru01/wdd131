// Display Current Year
document.getElementById("year").textContent = new Date().getFullYear();

// Display Last Modified Date
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    return (temp <= 10 && windSpeed > 4.8) ?
        (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + "°C"
        : "N/A";
}

// Get temperature and wind speed values
const temp = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

// Display Wind Chill
document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
