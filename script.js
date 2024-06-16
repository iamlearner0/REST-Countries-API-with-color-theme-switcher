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

getCountries().then(
  (countries) => {
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

      //Appending the elements
      countryContainer.appendChild(countryCard);
      countryCard.firstElementChild(countryFlag);
      countryCard.appendChild(countryDescription);
      countryDescription.firstElementChild(countryName);
      countryDescription.appendChild(countryPopulation);
      countryDescription.appendChild(countryRegion);
      countryDescription.appendChild(countryCapital);
    });
  }

  // for (let country of countries) {
  //   let countryCard = document.createElement("div");
  //   countryCard.classList.add("country");
  //   let countryFlag = document.createElement("img");
  //   countryFlag.classList.add("country--flag");
  //   countryFlag.setAttribute("src", country.flag);
  //   let countryDescription = document.createElement("div");
  //   countryDescription.classList.add("country--description");
  //   let countryName = document.createElement("h3");
  //   countryName.innerText = `${country.name}`;
  //   let countryPopulation = document.createElement("p");
  //   countryPopulation.innerHTML = `Population: <span>${country.population}</span>`;
  //   let countryRegion = document.createElement("p");
  //   countryRegion.innerHTML = `Region: <span>${country.population}</span>`;
  //   let countryCapital = document.createElement("p");
  //   countryCapital.innerHTML = `Population: <span>${country.population}</span>`;

  //   //Appending the elements
  //   countryContainer.appendChild(countryCard);
  //   countryCard.firstElementChild(countryFlag);
  //   countryCard.appendChild(countryDescription);
  //   countryDescription.firstElementChild(countryName);
  //   countryDescription.appendChild(countryPopulation);
  //   countryDescription.appendChild(countryRegion);
  //   countryDescription.appendChild(countryCapital);
  // }
);

async function getCountries() {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
}
