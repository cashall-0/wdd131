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

// Call the function immediately to set the current year
setCurrentYear();
setLastModified();