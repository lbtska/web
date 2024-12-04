let offset = 0;
const limit = 10;

async function fetchPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    displayPokemon(data.results);
    offset += limit;
}

function displayPokemon(pokemonList) {
    const container = document.getElementById('pokemon-container');
    
    pokemonList.forEach(async (pokemon) => {
        const pokemonData = await fetch(pokemon.url);
        const pokemonDetails = await pokemonData.json();
        
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <img src="${pokemonDetails.sprites.front_default}" alt="${pokemonDetails.name}">
            <h3>${pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</h3>
            <p>Height: ${pokemonDetails.height / 10} m</p>
            <p>Weight: ${pokemonDetails.weight / 10} kg</p>
        `;
        container.appendChild(card);
    });
}

document.getElementById('load-more').addEventListener('click', fetchPokemon);


fetchPokemon();