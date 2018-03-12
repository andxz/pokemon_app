const searchPokemon = document.getElementById('searchPokemon');
const PokemonInfoElement = document.getElementById('Pokemon');

getPokemon();

function getPokemon(){
var pokeURL = 'https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/?limit=151';

  fetch(pokeURL)
    .then(function(response){
      return response.json();
    })
    .then(function(pokemonData){
      displayPokemon(pokemonData);
    })
    .catch(function(error){
      console.log(error);
    })
}

function displayPokemon(pokemonData){
  let PokemonHTML = '';
  let pokemonArray = pokemonData.results;
  for(let pokemon of pokemonArray){
      
      PokemonHTML = PokemonHTML + `<p onclick="morePokemonInfo()"> ${pokemon.name} </p>
`;
      
  }
    
  PokemonInfoElement.innerHTML = PokemonHTML;
}

function morePokemonInfo() {
    document.getElementById("Pokemon_info_1").innerHTML = "YOU CLICKED ME!";


}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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