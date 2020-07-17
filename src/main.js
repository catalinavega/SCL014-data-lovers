import data from './data/pokemon/pokemon.js';
import { sortOrder } from './data.js';

// VARIABLE QUE LLAMA A TODA LA DATA
const allPokemon = data.pokemon;

// PASAR DE PÁG. DE LOGIN A PÁG. DE POKÉDEX
document.getElementById('firstButton').addEventListener('click', hideAndShow);

// OBTENER NOMBRE DE USUARIO
const saveUsername = document.getElementById('firstButton');
saveUsername.addEventListener('click', () => {
    const user = document.getElementById('username').value;
    document.getElementById('welcomeUser').innerHTML = `Bienvenido ${user}`;
});

// FUNCION QUE MUESTRA U OCULTA SECCIONES DE HTML
function hideAndShow() {
    document.getElementById('firstPage').classList.add('hidden');
    document.getElementById('secondPage').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
    document.getElementById('sidebar').classList.remove('hidden');
}

// MOSTRAR Y OCULTAR MENU DESPLEGABLE (SIDEBAR)
document.querySelector('.toggle-btn').addEventListener('click', showSidebar);

function showSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// VARIABLE PARA LLAMAR AL SELECTOR DE CLASE #allCards
const allCards = document.querySelector('#allCards');

// FUNCIÓN PARA MOSTRAR A LOS POKEMON
const showPokemonData = (data) => {
    let infoPokemon = '';

    for (const pokemon in data) {
        const card = document.createElement('div');

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
                <p id='pokemonHeight'>ALTURA:&nbsp;<b>${data[pokemon].size.height}</b></p>
                <p id='pokemonWeight'>PESO:&nbsp;<b>${data[pokemon].size.weight}</b></p>
                <p id='pokemonSpawnChance'>% Aparición:&nbsp;<b>${data[pokemon]['spawn-chance']}%</b></p>
                <p id='pokemonEncounter'>% Captura Base:&nbsp;<b>${data[pokemon].encounter['base-capture-rate']}%</b></p>
                <p id='pokemonResistance'><b>RESISTENCIA</p></p>
                <p id='pokemonResistanceImg'>
                <img class='imgResistance' alt='' src='img/type-icons/${data[pokemon].resistant[0]}.png'>
                <img class='imgResistance' alt='' src='img/type-icons/${data[pokemon].resistant[1]}.png'>
                <img class='imgResistance' alt='' src='img/type-icons/${data[pokemon].resistant[2]}.png'>
                <img class='imgResistance' alt='' src='img/type-icons/${data[pokemon].resistant[3]}.png'>
                <img class='imgResistance' alt='' src='img/type-icons/${data[pokemon].resistant[4]}.png'>
                <img class='imgResistance' alt='' src='img/type-icons/${data[pokemon].resistant[5]}.png'>
                <img class='imgResistance' alt='' src='img/type-icons/${data[pokemon].resistant[6]}.png'>
                <img class='imgResistance' alt='' src='img/type-icons/${data[pokemon].resistant[7]}.png'></p>
            </div>
        </div>`;

        // Crear un hijo de allCards
        allCards.appendChild(card);
        card.innerHTML = infoPokemon;
    }
};

showPokemonData(allPokemon);

// FUNCION QUE PERMITE ORDENAR SEGUN OPCION DEL SELECT
const chooseOrder = document.getElementById('chooseOrder');

chooseOrder.addEventListener('change', () => {
    document.getElementById('allCards').innerHTML = '';
    const selected = chooseOrder.options[chooseOrder.selectedIndex].value;
    const sortData = sortOrder.chooseOrder(allPokemon, selected);
    showPokemonData(sortData);
})

// ORDENAR DATA SEGÚN FILTRO SELECCIONADO
document.querySelector('.chooseType').addEventListener('change', filterTypes);

// FUNCIÓN PARA FILTRAR POR TIPO DE POKÉMON
function filterTypes() {
    const pokemonType = document.getElementById('chooseType').value;
    const selectedPokemon = allPokemon.filter(pokemon => pokemon.type.includes(pokemonType));
    document.getElementById('allCards').innerHTML = '';
    showPokemonData(selectedPokemon);
}

document.querySelector('.chooseGeneration').addEventListener('change', filterGeneration);

// FUNCIÓN PARA FILTRAR POR GENERACIÓN
function filterGeneration() {
    const pokemonGeneration = document.getElementById('chooseGeneration').value;
    const selectedPokemon = allPokemon.filter(pokemon => pokemon.generation.name.includes(pokemonGeneration));
    document.getElementById('allCards').innerHTML = '';
    showPokemonData(selectedPokemon);
}

// FUNCIÓN SEARCHBAR
document.querySelector('.searchBar').addEventListener('keyup', searchBarPokemons);

function searchBarPokemons() {
    const searchPokemons = document.getElementById('searchPokemon').value;
    const searchPokemon = allPokemon.filter(pokemon => pokemon.name.includes(searchPokemons));
    document.getElementById('allCards').innerHTML = '';
    showPokemonData(searchPokemon);
}
// LOGOUT
document.getElementById('logOut').addEventListener('click', reload);
function reload(){
    location.reload(true);
}