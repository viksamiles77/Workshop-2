const url = "https://swapi.dev/api/";
let peopleUrl = `${url}people/?page=1`;
let shipsUrl = `${url}starships/?page=1`;

//  function get info (fetch)
//  function show info table
//  on click events

// selecting elements
const peopleBtn = document.querySelector("#peopleBtn");
const shipsBtn = document.querySelector("#shipsBtn");
const loader = document.querySelector("#loader");
const resultDiv = document.querySelector("#result");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let peopleFromApi;
let shipsFromApi;

loader.style.display = "none";

// functions

function getPeople() {
  // get people func
  return fetch(peopleUrl)
    .then((res) => res.json())
    .then((people) => {
      peopleFromApi = people.results; // store the people in a variable
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
}
getPeople();

function getShips() {
  // get ships func
  return fetch(shipsUrl)
    .then((res) => res.json())
    .then((ships) => {
      shipsFromApi = ships.results;
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
}
getShips();

function showPeople(event) {
  loader.style.display = "block";
  let tableRows = "";
  console.log(peopleFromApi);
  peopleFromApi.forEach((person) => {
    tableRows += `
    <tr>
    <td>${person.name}</td>
    <td>${person.height}</td>
    <td>${person.mass}</td>
    <td>${person.gender}</td>
    <td>${person.birth_year}</td>
    <td>${person.films.length}</td>
    </tr>
    `;
  });

  resultDiv.innerHTML = "";
  resultDiv.innerHTML = `
    <table class="table-css">
    <tr>
    <th>Name</th>
    <th>Height</th>
    <th>Mass</th>
    <th>Gender</th>
    <th>Birth Year</th>
    <th>Appearances</th>
    </tr>
    ${tableRows}  
    </table>
    `;
}

function showShips(event) {
  let tableRows = "";
  console.log(shipsFromApi);
  shipsFromApi.forEach((ship) => {
    tableRows += `
    <tr>
    <td>${ship.name}</td>
    <td>${ship.model}</td>
    <td>${ship.manufacturer}</td>
    <td>${ship.cost_in_credits}</td>
    <td>${ship.cargo_capacity}</td>
    <td>${ship.starship_class}</td>
    </tr>
    `;
  });

  resultDiv.innerHTML = "";
  resultDiv.innerHTML = `
    <table class="table-css">
    <tr>
    <th>Name</th>
    <th>Model</th>
    <th>Manufacturer</th>
    <th>Cost</th>
    <th>People Capacity</th>
    <th>Class</th>
    </tr>
    ${tableRows}  
    </table>
    `;
}

peopleBtn.addEventListener("click", showPeople);
shipsBtn.addEventListener("click", showShips);
