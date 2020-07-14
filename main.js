import data from './data/pokemon/pokemon.js';
// import {
//     searchPokemons
// } from '.data.js';
// VARIABLE QUE LLAMA A TODA LA DATA
const allPokemon = data.pokemon;

//PASAR DE PÁG. DE LOGIN A PÁG. DE POKÉDEX
document.getElementById('firstButton').addEventListener('click', hideAndShow);

//OBTENER NOMBRE DE USUARIO
const saveUsername = document.getElementById('firstButton');
saveUsername.addEventListener('click', () => {
    const user = document.getElementById('username').value;
    document.getElementById('welcomeUser').innerHTML = `Bienvenido ${user}`;
});

function hideAndShow() {
    document.getElementById('firstPage').classList.add('hidden');
    document.getElementById('secondPage').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
}


// MOSTRAR Y OCULTAR MENU DESPLEGABLE (SIDEBAR)
document.querySelector('.toggle-btn').addEventListener('click', showSidebar);

function showSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
};

// VARIABLE PARA LLAMAR AL SELECTOR DE CLASE #allCards
let allCards = document.querySelector('#allCards');

//FUNCIÓN PARA MOSTRAR A LOS POKEMON
const showPokemonData = (data) => {
    let infoPokemon = '';

    for (const pokemon in data) {
        let card = document.createElement('div');

        // Usar template strings
        infoPokemon = `
        <div id="card" class=''>
            <div class='pokemonCardFront'>
                <p id='pokemonCp'><small>PC</small>${data[pokemon].stats['max-cp']}</p>
                <img id='pokemonImage' src='${data[pokemon].img}'>
                <p id='pokemonNum'>#${data[pokemon].num}</p>
                <p id='pokemonName'>${data[pokemon].name.toUpperCase()}</p>
                <p id='pokemonType'><img class='imgType' alt='' src='img/type-icons/${data[pokemon].type[0]}.png'>
                <img class='imgType' alt='' src='img/type-icons/${data[pokemon].type[1]}.png'>
            </div>
            <div class='pokemonCardBack'>
                <p id='pokemonHeight'>ALTURA:&nbsp;<b>${data[pokemon].size['height']}</b></p>
                <p id='pokemonWeight'>PESO:&nbsp;<b>${data[pokemon].size['weight']}</b></p>
                <p id='pokemonSpawnChance'>% Aparición:&nbsp;<b>${data[pokemon]['spawn-chance']}%</b></p>
                <p id='pokemonEncounter'>% Captura Base:&nbsp;<b>${data[pokemon].encounter['base-capture-rate']}%</b></p>
                <p id='pokemonAbout'><b>BIO:</b>&nbsp;${data[pokemon].about}</p>
            </div>
        </div>`;

        // Crear un hijo de allCards
        allCards.appendChild(card);
        card.innerHTML = infoPokemon;
    };
};

showPokemonData(allPokemon);
document.getElementById('chooseOrder').addEventListener('change', chooseOrder);

//ORDENAR DATA SEGÚN FILTRO SELECCIONADO
function chooseOrder() {
    const chooseOrder = document.getElementById('chooseOrder');
    const order = chooseOrder.value;

    if (order === 'aToZ') {
        document.getElementById('allCards').innerHTML = '';
        showPokemonData(allPokemon.sort(orderItemsByName));
    }
    if (order === 'zToA') {
        document.getElementById('allCards').innerHTML = '';
        showPokemonData((allPokemon.sort(orderItemsByName)).reverse());
    }
    if (order === 'numberAsc') {
        document.getElementById('allCards').innerHTML = '';
        showPokemonData(allPokemon.sort(orderItemsByNum));
    }
    if (order === 'numberDesc') {
        document.getElementById('allCards').innerHTML = '';
        showPokemonData((allPokemon.sort(orderItemsByNum)).reverse());
    }
    if (order === 'pcAsc') {
        document.getElementById('allCards').innerHTML = '';
        showPokemonData(allPokemon.sort(orderItemsByPC));
    }
    if (order === 'pcDesc') {
        document.getElementById('allCards').innerHTML = '';
        showPokemonData((allPokemon.sort(orderItemsByPC)).reverse());
    }

};

//FUNCIÓN PARA ORDENAR LA DATA SEGÚN EL NOMBRE
function orderItemsByName(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};

//FUNCION PARA ORDENAR LA DATA SEGÚN EL NÚMERO
function orderItemsByNum(a, b) {
    if (a.num < b.num) {
        return -1;
    }
    if (a.num > b.num) {
        return 1;
    }
    return 0;
};

//FUNCIÓN PARA ORDENAR LA DATA SEGÚN MÁXIMO PODER DE COMBATE
function orderItemsByPC(a, b) {
    if (parseInt(a.stats['max-cp']) < parseInt(b.stats['max-cp'])) {
        return -1;
    }
    if (parseInt(a.stats['max-cp']) > parseInt(b.stats['max-cp'])) {
        return 1;
    }
    return 0;
};

document.querySelector('.chooseType').addEventListener('change', filterTypes);

//FUNCIÓN PARA FILTRAR POR TIPO DE POKÉMON
function filterTypes() {
    let pokemonType = document.getElementById('chooseType').value;
    let selectedPokemon = allPokemon.filter(pokemon => pokemon.type.includes(pokemonType));
    document.getElementById('allCards').innerHTML = '';
    showPokemonData(selectedPokemon);
};

document.querySelector('.chooseGeneration').addEventListener('change', filterGeneration);

//FUNCIÓN PARA FILTRAR POR GENERACIÓN
function filterGeneration() {
    let pokemonGeneration = document.getElementById('chooseGeneration').value;
    let selectedPokemon = allPokemon.filter(pokemon => pokemon.generation.name.includes(pokemonGeneration));
    document.getElementById('allCards').innerHTML = '';
    showPokemonData(selectedPokemon);
};

//FUNCIÓN SEARCHBAR
// const searchBarPokemons = (pokemonAll, inputValue) => pokemonAll.orderItemsByName(
//     (pokemon) => pokemon.name.toLowerCase().startsWith(inputValue)
// );
// const searchPokemons = document.getElementById('searchPokemon');
// searchPokemons.addEventListener('input', () => {
//     allPokemon.innerHTML = '';
//     showPokemonData(searchBarPokemons(allPokemon, searchBarPokemons.value));
// });

document.querySelector('.searchPokemon').addEventListener('keyup', searchBarPokemons);

function searchBarPokemons() {
    let pokemonSearch = document.getElementById('searchPokemon').value.toUpperCase();
    let searchPokemon = allPokemon.filter(pokemon => pokemon.name.includes(pokemonSearch));
    document.getElementById('allCards').innerHTML = '';
    showPokemonData(searchPokemon);
};