const pokemonOl = document.getElementById('pokemonList');
const load_sequence = document.getElementById('next_page');
const limit = 5;
let offset = 0;

function convertPokemonTypestoLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`)
}

function convertPokemonToHTML(pokemon){
    console.log(pokemon.types[0].type.name);
    return `
    <li class="pokemon ${pokemon.types[0].type.name}">
    <span class="number">#${pokemon.id}</span>
    <span class="poke_name">${pokemon.name}</span>
    <div class="detail">  
        <ol class="types">
            ${convertPokemonTypestoLi(pokemon.types).join('')}
        </ol>   
         <div class="ball"><img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}"></div>
    </div>
    </li>
    `
}

    // pokeApi.getPokemons().then((pokemonList) => {
        
    //     for (let i = 0; i<pokemonList.length; i++) {
    //         var pokemon = pokemonList[i];
    //         pokemonOl.innerHTML += convertPokemonToHTML(pokemon);
    //     }
    // })


function loadPokemonItems(offset, limit) {
    
    pokeApi.getPokemons(offset, limit).then((pokemonList) => {
        
        for (let i = 0; i<pokemonList.length; i++) {
            var pokemon = pokemonList[i];
            pokemonOl.innerHTML += convertPokemonToHTML(pokemon);
        }
    })

}
loadPokemonItems(offset, limit);
console.log(offset);

load_sequence.addEventListener('click', () => {
    offset += limit;
    console.log(offset);
    loadPokemonItems(offset, limit);
})



