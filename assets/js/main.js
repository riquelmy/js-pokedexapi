function convertPokemonToHTML(pokemon){
    return `
    <li class="pokemon">
    <span class="number">#001</span>
    <span class="poke_name">${pokemon.name}</span>
    <div class="detail">  
        <ol class="types">
            <li class="type">Grass</li>
            <li class="type">Poison</li>
        </ol>   
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
    </div>
    </li>
    `
}

const pokemonOl = document.getElementById('pokemonList');

    pokeApi.getPokemons().then((pokemonList) => {
        
        for (let i = 0; i<pokemonList.length; i++) {
            var pokemon = pokemonList[i];
            pokemonOl.innerHTML += convertPokemonToHTML(pokemon);
        }
    })

