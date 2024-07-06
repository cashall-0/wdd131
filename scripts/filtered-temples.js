const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      }
  ];

document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    const hamburger = document.getElementById("hamburger");
    const navUl = document.querySelector("nav ul");

    hamburger.addEventListener("click", function() {
        navUl.classList.toggle("show");
        hamburger.textContent = navUl.classList.contains("show") ? "X" : "☰";
    });
});

const gallery = document.getElementById('templeGallery');
const generalHeading = document.getElementById('general-heading');


function displayTemples(filter) {
    gallery.innerHTML = ''; // Clear the gallery
    generalHeading.textContent = "Home";

    let filteredTemples = temples;

    if (filter === 'old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        generalHeading.textContent = "Old";
    } else if (filter === 'new') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        generalHeading.textContent = "New";
    } else if (filter === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
        generalHeading.textContent = "Large";
    } else if (filter === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
        generalHeading.textContent = "Small";
    }

    filteredTemples.forEach(temple => {
        const figure = document.createElement('figure');
        figure.classList.add('figure');

        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `<h1 class="fig-heading">${temple.templeName}</h1>`;
        figure.appendChild(figcaption);

        const location = document.createElement('p');
        location.innerHTML = `<span class="fig-location">location:</span> ${temple.location}`;
        figure.appendChild(location);

        const dedicated = document.createElement('p');
        dedicated.innerHTML = `<span class="fig-dedication">dedicated:</span> ${temple.dedicated}`;
        figure.appendChild(dedicated);

        const size = document.createElement('p');
        size.innerHTML = `<span class="fig-size">size:</span> ${Math.round(parseInt((temple.area)/10.764))}`;
        figure.appendChild(size);

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";
        figure.appendChild(img);

        gallery.appendChild(figure);
    });
}

// Initially display all temples
displayTemples('home');

