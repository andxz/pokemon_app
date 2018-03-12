const searchPokemon = document.getElementById('searchPokemon');
const PokemonInfoElement = document.getElementById('Pokemon');

getPokemon();

function getPokemon(){
var pokeURL = 'https://pokeapi.co/api/v2/pokemon/';

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
  let PokemonHTML = `
    <h3>Pokemon:</h3>
    <p> ${pokemonData.results[0].name} </p>
  `;

  PokemonInfoElement.innerHTML = PokemonHTML;
}

