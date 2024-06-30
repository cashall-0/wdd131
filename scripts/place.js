function setCurrentYear() {
    // Get current year
    const currentYear = new Date().getFullYear();

    // Find the span element with id "currentyear" in the footer
    const yearSpan = document.getElementById('currentyear');

    // Set the innerHTML of the span to the current year
    if (yearSpan) {
        yearSpan.innerHTML = currentYear;
    }
}
// Function to set last modified date dynamically
function setLastModified() {
    // Get last modified date of the HTML document
    const lastModified = document.lastModified;

    // Find the span element with id "lastmodified" in the footer
    const modifiedSpan = document.getElementById('lastModified');

    // Set the innerHTML of the span to the last modified date
    if (modifiedSpan) {
        modifiedSpan.innerHTML = lastModified;
    }
}
function calculateWindChill(temp, wind_speed, units='metric') {
    if (units === 'imperial') {
        temp = (temp - 32) * 5 / 9; // convert Fahrenheit to Celsius for calculation
        wind_speed = wind_speed * 1.60934; // convert mph to km/h for calculation
    }
    
    // Check if temperature is <= 10°C and wind speed is > 4.8 km/h
    if (temp <= 10 && wind_speed > 4.8) {
        let wind_chill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind_speed, 0.16) + 0.3965 * temp * Math.pow(wind_speed, 0.16);
        return Math.round(wind_chill * 100) / 100; // round to two decimal places
    } else {
        return "N/A";
    }
}

// Example usage:
let temperature = 5; // in Celsius
let wind_speed = 10; // in km/h
let wind_chill = calculateWindChill(temperature, wind_speed);

// Dynamically create HTML for wind chill information
let weatherDiv = document.getElementById('w-report');   
let windChillDiv = document.createElement('div');
windChillDiv.classList.add('key-value-pair');
windChillDiv.innerHTML = `
    <div class="key"><strong>Wind Chill</strong></div>
    <div class="colon">:</div>
    <div class="value">${wind_chill}°C</div>
`;
weatherDiv.appendChild(windChillDiv);

// Call the function immediately to set the current year
setCurrentYear();
setLastModified();