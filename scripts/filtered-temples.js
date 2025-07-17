// ✅ Temple data array 
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "April 6, 1893",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-1200x800.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "November 27, 1919",
    area: 42000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-1200x800.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    area: 40000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-1200x800.jpg"
  },
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "August 24, 1985",
    area: 19000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-1200x800.jpg"
  },
  {
    templeName: "Kinshasa DRC Temple",
    location: "Kinshasa, DR Congo",
    dedicated: "April 14, 2019",
    area: 12000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-dr-congo-temple/kinshasa-dr-congo-temple-1200x800.jpg"
  },
  {
    templeName: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "May 26, 1996",
    area: 21000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-1200x800.jpg"
  }
];

// ✅ Target container
const container = document.querySelector("#temples-container");
const pageTitle = document.querySelector("#pageTitle");

// ✅ Render function
function displayTemples(templesToDisplay) {
  container.innerHTML = `<h3>Temple Gallery</h3>`;
  templesToDisplay.forEach(t => {
    const card = document.createElement("section");
    card.classList.add("temple-card");
    card.innerHTML = `
      <h2>${t.templeName}</h2>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

// ✅ Filter function
function filterTemples(type) {
  let filtered = [];

  switch (type) {
    case "old":
      pageTitle.textContent = "Old Temples";
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      pageTitle.textContent = "New Temples";
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      pageTitle.textContent = "Large Temples";
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      pageTitle.textContent = "Small Temples";
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      pageTitle.textContent = "All Temples";
      filtered = temples;
  }

  displayTemples(filtered);
}

// ✅ Nav event handling
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = e.target.getAttribute("data-filter");
    filterTemples(filter);
  });
});

// ✅ On page load
displayTemples(temples);

// ✅ Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Menu toggle (for mobile dropdown)
document.getElementById('menu').addEventListener('click', function () {
  document.querySelector('.navigation').classList.toggle('open');
});
