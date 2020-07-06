import data from "./data/pokemon/pokemon.js";

let allPokemon = data.pokemon;
console.log(allPokemon);

document.getElementById("firstButton").addEventListener("click", hideAndShow);

function hideAndShow(){
    document.getElementById("firstPage").classList.add("hidden");
    document.getElementById("secondPage").classList.remove("hidden");
}

// MOSTRAR Y OCULTAR MENU DESPLEGABLE (SIDEBAR)
document.querySelector(".toggle-btn").addEventListener("click", showSidebar);

function showSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
};

/* FUNCIÓN PARA TRAER INFO */
let allCards = document.querySelector("#allCards");


// FUNCIÓN PARA MOSTRAR A LOS POKEMON
const showPokemonData = () => {
    let infoPokemon = '';

    for(let i = 0; i < allPokemon.length ; i++){
        let card = document.createElement("div");
        if (allPokemon[i].generation.name === 'kanto'){
            card.setAttribute("class", "kantoCard");
        } else {
            card.setAttribute("class", "johtoCard");
        };
        infoPokemon = `
                    <img id="pokemonImage"src="${allPokemon[i].img}">
                    <p id="pokemonNum">#${allPokemon[i].num}</p>
                    <p id="pokemonName">${allPokemon[i].name}</p>
                    <p id="pokemonType">${allPokemon[i].type}</p>`
        allCards.appendChild(card);
        card.innerHTML = infoPokemon;
    }
};

showPokemonData();