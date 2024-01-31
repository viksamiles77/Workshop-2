const url = "https://swapi.dev/api/";
let peopleUrl = `${url}people/?page=<PAGE_NUMBER>`;
let shipsUrl = `${url}starships/?page=<PAGE_NUMBER>`;

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
      peopleFromApi = people; // store the people in a variable
      return people; // return people
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
}


function showPeople(people) {
    return `
    <table>
    <tr>
    <th>Name</th>
    <th>Height</th>
    <th>Mass</th>
    <th>Gender</th>
    <th>Birth Year</th>
    <th>Appearances</th>
    </tr>
    <tr>
    <td>${people.name}</td>
    <td>${people.height}</td>
    <td>${people.mass}</td>
    <td>${people.gender}</td>
    <td>${people.birth_year}</td>
    <td>${people.films.length}</td>
    </tr>
    </table>
    `;
}

showPeople()










function getShips() {
  // get ships func
  return fetch("https://swapi.dev/api/starships/")
    .then((res) => res.json())
    .then((ships) => {
      shipsFromApi = ships;
      return ships;
    });
}