
/*Function that fetch all Pokemon trough API */

const PokemonList = document.getElementById('Pokemon');

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


/*Function that continues trough Fetch above and Loops out Pokemon name and ID into a List */


function displayPokemon(pokemonData) {

    let PokemonHTML = '';
    let pokemonArray = pokemonData.results;
    for (let pokemon of pokemonArray) {

        PokemonHTML = PokemonHTML + `<li id="${pokemon.name}" onClick="morePokemonInfo(this.id)" > ${pokemon.name} <li>
`;
    }
    PokemonList.innerHTML = PokemonHTML;
    }


/*Function that recives the Clicked ID and makes a new Fetch to diffrent API with it*/

function morePokemonInfo(clicked_id) {

    const InfoAboutPokemon = clicked_id;
    getPokemon();

    function getPokemon() {

        fetch(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/` + InfoAboutPokemon)
            .then((response) => response.json())
            .then((PokemonInfoData) => {
                displayPokemonInfo(PokemonInfoData)
            })
            .catch((error) => {
                console.log(error);
            })
    }

/*Function that continues trough Fetch above and Loops out diffrent Information about Selected Pokemon*/

    function displayPokemonInfo(PokemonInfoData) {

        const displayPokemonHTML = document.getElementById('displayPokemon');
        let newInfo = `
<h2> ${PokemonInfoData.name}</h2>
    <div class="style">
        <p> Pokedex Number: ${PokemonInfoData.id}</p>
    </div>
    <div class="infoElements">
<h3>Type</h3>
        <p>${PokemonInfoData.types[1].type.name}</p>
    </div>
    <div class="infoElements">
<h3>Weight</h3>
        <p>${PokemonInfoData.weight} KG </p>
    </div>
    <div class="infoElements">
<h3>Main Move</h3>
        <p>${PokemonInfoData.moves[60].move.name}</p>
    </div>
    <div class="infoElements">
<h3>HP</h3>
        <p>${PokemonInfoData.stats[5].base_stat}</p>
    </div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/
master/sprites/pokemon/${PokemonInfoData.id}.png" 
        width="50%" height="25%"/>
  `;
        displayPokemonHTML.innerHTML = newInfo;
    }
}


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