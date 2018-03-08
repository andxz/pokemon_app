const searchPokemon = document.getElementById('searchPokemon');

searchPokemon.addEventListener('change', function(){
  const searchValue = searchPokemon.value;
  getPokemon(searchValue);
})

getPokemon("Stockholm");

function getPokemon(city){
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
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
  const PokemonInfoElement = document.getElementById('Pokemon');

  let Pokemon = `
    <h3>Pokemon:</h3>
    <p> ${pokemonData.results[0].name} </p>

  `;

  PokemonInfoElement.innerHTML = Pokemon;
}


