const searchPokemon = document.getElementById('searchPokemon');
const PokemonInfoElement = document.getElementById('Pokemon');

getPokemon();

function getPokemon(){
var pokeURL = 'https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/';

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
  let PokemonHTML = '<h3>Pokémon:</h3>';
  let pokemonArray = pokemonData.results;
  for(let pokemon of pokemonArray){
      
      PokemonHTML = PokemonHTML + `<p> ${pokemon.name} </p>`;
      
  }
    
  PokemonInfoElement.innerHTML = PokemonHTML;
}

