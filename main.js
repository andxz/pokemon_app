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

        PokemonHTML = PokemonHTML + `<li onclick="morePokemonInfo()" id ="${pokemon.name}"> ${pokemon.name} <li>
`;
    }

    PokemonList.innerHTML = PokemonHTML;


    }

//function morePokemonInfo() {
//
//    var x = document.getElementById("Pokemon").value;
//    document.getElementById("displayPokemonBox").innerHTML = x;
//
//
//}


//
//
//PokemonList.addEventListener('change', () => {
//  const searchValue = PokemonList.value;
//  getPokemon(PokemonList);
//})
//
//getPokemon();
//
//// Expects a parameter!!!
//function getPokemon(selectedPokemon){
//
//  fetch(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/` + selectedPokemon)
//    .then((response) => response.json())
//    .then((PokemonInfoData) =>  {
//      displayPokemonInfo(PokemonInfoData)
//    })
//    .catch((error) => {
//      console.log(error);
//    })
//}
//
//
//function displayPokemonInfo(PokemonInfoData){
//
//  const displayPokemonHTML = document.getElementById('displayPokemon');
//  let newInfo = `
//    <p> ${PokemonInfoData.name}</p>
//  `;
//  displayPokemonHTML.innerHTML = newInfo;
//}










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
