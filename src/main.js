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
    for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");
        // Condicionar el color de fondo de la tarjeta según la generación
        if (data[i].generation.name === 'kanto') {
            card.setAttribute("class", "kantoCard");
        } else {
            card.setAttribute("class", "johtoCard");
        };
        // Usar template strings
        infoPokemon = `
                    <img id="pokemonImage"src="${data[i].img}">
                    <p id="pokemonNum">#${data[i].num}</p>
                    <p id="pokemonName">${data[i].name}</p>
                    <p id="pokemonType">${data[i].type}</p>`
            // Crear un hijo de allCards
        allCards.appendChild(card);
        card.innerHTML = infoPokemon;
    }
};

showPokemonData(allPokemon);

document.getElementById("selectFilter").addEventListener("change", filters);

// Ordenar Alfabéticamente
function filters() {
    const selectFilter = document.getElementById("selectFilter");
    const orderAlphabet = selectFilter.value;
    const aToZ = allPokemon.sort(orderItems);

    if (orderAlphabet === 'aToZ') {
        document.getElementById('allCards').innerHTML = '';
        showPokemonData(aToZ);
    } else if (orderAlphabet === 'zToA') {
        document.getElementById('allCards').innerHTML = '';
        const zToA = aToZ.reverse();
        showPokemonData(zToA);
    }
};

function orderItems(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};