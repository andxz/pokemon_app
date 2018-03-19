//const searchPokemon = document.getElementById('searchPokemon');
const PokemonList = document.getElementById('Pokemon');


//getPokemon();
//
//function getPokemon() {
    var pokeURL = 'https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/?limit=151';

    fetch(pokeURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (pokemonData) {
            displayPokemon(pokemonData);

        })
        .catch(function (error) {
            console.log(error);
        })
//}

function displayPokemon(pokemonData) {

    let PokemonHTML = '';
    let pokemonArray = pokemonData.results;
    for (let pokemon of pokemonArray) {

        PokemonHTML = PokemonHTML + `<li id="${pokemon.name}" onClick="morePokemonInfo(this.id)" > ${pokemon.name} <li>
`;
    }

    PokemonList.innerHTML = PokemonHTML;


    }

function morePokemonInfo(clicked_id) {

const InfoAboutPokemon = clicked_id;

getPokemon();

function getPokemon(){

  fetch(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/` + InfoAboutPokemon)
    .then((response) => response.json())
    .then((PokemonInfoData) =>  {
      displayPokemonInfo(PokemonInfoData)
    })
    .catch((error) => {
      console.log(error);
    })
}


function displayPokemonInfo(PokemonInfoData){

  const displayPokemonHTML = document.getElementById('displayPokemon');
  let newInfo = `
    <p> ${PokemonInfoData.name}</p>
  `;
  displayPokemonHTML.innerHTML = newInfo;
}

    }







//
//const search = (event) => {
//  event.preventDefault();
//  const pokenumber = document.getElementById("pokenumber").value;
//  const baseURL = "https://pokeapi.co/api/v2/pokemon/";
//  $.get(baseURL + pokenumber, (pokemon) => {
//    document.getElementById("pokename").innerHTML = pokemon.name;
//    document.getElementById("pokeid").innerHTML = pokemon.id;
//    document.getElementById("pokeimage").src = pokemon.sprites.front_default;
//  });
//}
//document.getElementById("pokeform").addEventListener('submit', search);
//

//fetchMovieAsync();
//
//
//
//async function fetchMovieAsync(){
//  const url = 'https://cors-anywhere.herokuapp.com/https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6';
//  const response = await fetch(url);
//  const movie = await response.json();
//  let people = movie.people;
//  let promiseArray = [];
//  for(personURL of people){ 
//    let personPromise = await fetch(personURL)
//    let person = await personPromise.json();
//    promiseArray.push(person);
//  }
//  const allPeople = await Promise.all(promiseArray);
//  const movieInfo = document.getElementById('movieInfo');
//  let htmlBlock = `<h1>${movie.title} Characters</h1>`;
//  for(let person of allPeople){
//    htmlBlock += `
//      <div class="person">
//        <p><span style="color: #999">name:</span> ${person.name}</p>
//        <p><span style="color: #999">age:</span> ${person.age}</p>
//      </div>
//    `;
//  }
//  movieInfo.innerHTML = htmlBlock;
//}
//
//        var cln = item.cloneNode(true);
//        displayPokemon.appendChild(cln);
//
//var para = document.createElement("p");
//para.appendChild(x);
//displayPokemon.appendChild(para);











/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function selectPokemonDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
