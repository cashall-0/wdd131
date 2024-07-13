function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.innerHTML = currentYear;
    }
}
// Function to set last modified date dynamically
function setLastModified() {
    const lastModified = document.lastModified;
    const modifiedSpan = document.getElementById('lastModified');
    if (modifiedSpan) {
        modifiedSpan.innerHTML = lastModified;
    }
}

// Call the function immediately to set the current year
setCurrentYear();
setLastModified();

// Products data array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];
  
  // Function to populate product options in the select element
  function populateProductOptions() {
    const select = document.getElementById('product');
  
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name; 
      select.appendChild(option);
    });
  }
  
  // Call the function to populate product options when the DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    populateProductOptions();
  });
  

      // Retrieve current counter value from localStorage or initialize to 0
      let reviewCounter = localStorage.getItem('reviewCounter') || 0;

      // Increment the counter for each successful review submission
      reviewCounter++;
      
      // Update the localStorage with the new counter value
      localStorage.setItem('reviewCounter', reviewCounter);
  
      // Display the number of reviews completed
      document.write(`<p>You have completed ${reviewCounter} reviews.</p>`);
  
  