import data from "./data/pokemon/pokemon.js";

// Variable que recoje todo el array
const allPokemon = data.pokemon;

document.getElementById("firstButton").addEventListener("click", hideAndShow);

function hideAndShow() {
    document.getElementById("firstPage").classList.add("hidden");
    document.getElementById("secondPage").classList.remove("hidden");
}

// MOSTRAR Y OCULTAR MENU DESPLEGABLE (SIDEBAR)
document.querySelector(".toggle-btn").addEventListener("click", showSidebar);

function showSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
};

/* VARIABLE PARA LLAMAR AL SELECTOR DE CLASE #allCards*/
let allCards = document.querySelector("#allCards");

// FUNCIÓN PARA MOSTRAR A LOS POKEMON
const showPokemonData = (data) => {
    let infoPokemon = '';
    for (const pokemon in data) {
        let card = document.createElement("div");
        // Condicionar el color de fondo de la tarjeta según la generación
        if (data[pokemon].generation.name === 'kanto') {
            card.setAttribute("class", "kantoCard");
        } else {
            card.setAttribute("class", "johtoCard");
        };

        // Usar template strings
        infoPokemon = `
                    <p id="pokemonCp"><small>PC</small> ${data[pokemon].stats['max-cp']}</p>
                    <img id="pokemonImage"src="${data[pokemon].img}">
                    <p id="pokemonNum">#${data[pokemon].num}</p>
                    <p id="pokemonName">${data[pokemon].name.toUpperCase()}</p>
                    <p id="pokemonType">${data[pokemon].type}</p>`
            // Crear un hijo de allCards
        allCards.appendChild(card);
        card.innerHTML = infoPokemon;
    }
};

showPokemonData(allPokemon);

document.getElementById("chooseOrder").addEventListener("change", chooseOrder);

// Ordenar según el filtro seleccionado
function chooseOrder() {
    const chooseOrder = document.getElementById("chooseOrder");
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

function orderItemsByName(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};

function orderItemsByNum(a, b) {
    if (a.num < b.num) {
        return -1;
    }
    if (a.num > b.num) {
        return 1;
    }
    return 0;
};

function orderItemsByPC(a, b) {
    if (parseInt(a.stats['max-cp']) < parseInt(b.stats['max-cp'])) {
        return -1;
    }
    if (parseInt(a.stats['max-cp']) > parseInt(b.stats['max-cp'])) {
        return 1;
    }
    return 0;
};

document.getElementById("chooseType").addEventListener("change", filterTypes);

function filterTypes() {
    let pokemonType = document.getElementById("chooseType").value;
    let selectedPokemon = allPokemon.filter(pokemon => pokemon.type.includes(pokemonType));
    document.getElementById('allCards').innerHTML = '';
    showPokemonData(selectedPokemon);
};