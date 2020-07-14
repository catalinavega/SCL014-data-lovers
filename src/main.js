import data from './data/pokemon/pokemon.js';

//VARIABLE QUE LLAMA A TODA LA DATA
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
                <p id='pokemonType'><img class='imgType' src='img/type-icons/${data[pokemon].type[0]}.png'>
                <img class='imgType' src='img/type-icons/${data[pokemon].type[1]}.png'></p>
            </div>
            <div class='pokemonCardBack'>
                <p id='pokemonAbout'><b>BIO: </b>${data[pokemon].about}</p>
                <p id='pokemonSizeInfo'><span id='pokemonSizeHeight'>ALTURA: ${data[pokemon].size['height']}</span>
                <span id='pokemonSizeWeight'>PESO: ${data[pokemon].size['weight']}</span></p>
                <p id='pokemonSpawnChance'>Posibilidad de aparición: ${data[pokemon]['spawn-chance']}</p>
                <p id='pokemonEncounter'>Tasa de captura base: ${data[pokemon].encounter['base-capture-rate']}</p>
            </div>
        </div>`;
        // Crear un hijo de allCards
        allCards.appendChild(card);
        card.innerHTML = infoPokemon;
        // for (let i = 0; i < data[pokemon]['type'].length; i++) {
        //     let rellenar = document.getElementById('pokemonType');
        //     let image = document.createElement('img');
        //     rellenar.appendChild(image);
        //     rellenar.setAttribute('class', 'imgType');
        //     rellenar.setAttribute('src', `img/type-icons/${data[pokemon].type[i]}.png`);
        //     console.log(data[pokemon].type[i]);
        // };
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


// if (data[pokemon].generation.name === 'kanto') {
//     document.getElementById('card').classList.add('kantoCard');
//     // card.setAttribute('id', 'card');
// } else {
//     document.getElementById('card').classList.add('johtoCard');
//     // card.setAttribute('id', 'card');
// };