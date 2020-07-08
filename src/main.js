import data from "./data/pokemon/pokemon.js";

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

document.getElementById("selectFilter").addEventListener("change", ascAlphabetically);

// FUNCION QUE ORDENA
function orderItems(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};

function ascAlphabetically() {
    const aToZ = allPokemon.sort(orderItems);
    document.getElementById('allCards').innerHTML = '';
    showPokemonData(aToZ);
    console.log(aToZ.reverse());
};