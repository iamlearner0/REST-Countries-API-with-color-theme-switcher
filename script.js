const filter = document.querySelector(".filter");
const regions = document.querySelector(".regions");
let countryContainer = document.querySelector(".countries--wrapper");

eventListener();

function eventListener() {
  filter.addEventListener("click", showRegions);
}

function showRegions() {
  regions.classList.toggle("display--region");
}

getCountries()
  .then((countries) => {
    countries.forEach((thecountry) => {
      console.log(thecountry.name);
      let countryCard = document.createElement("div");
      countryCard.classList.add("country");
      let countryFlag = document.createElement("img");
      countryFlag.classList.add("country--flag");
      countryFlag.setAttribute("src", country.flag);
      let countryDescription = document.createElement("div");
      countryDescription.classList.add("country--description");
      let countryName = document.createElement("h3");
      countryName.innerText = `${thecountry.name}`;
      let countryPopulation = document.createElement("p");
      countryPopulation.innerHTML = `Population: <span>${thecountry.population}</span>`;
      let countryRegion = document.createElement("p");
      countryRegion.innerHTML = `Region: <span>${thecountry.population}</span>`;
      let countryCapital = document.createElement("p");
      countryCapital.innerHTML = `Population: <span>${thecountry.population}</span>`;

      // Appending the elements
      countryCard.appendChild(countryFlag);
      countryDescription.appendChild(countryName);
      countryDescription.appendChild(countryPopulation);
      countryDescription.appendChild(countryRegion);
      countryDescription.appendChild(countryCapital);
      countryCard.appendChild(countryDescription);
      countryContainer.appendChild(countryCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching countries:", error);
  });

async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
