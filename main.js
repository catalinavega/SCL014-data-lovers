import data from "./data/pokemon/pokemon.js";

/* FUNCIÓN PARA TRAER INFO */
function showPokemonData(){
    for(let i = 0; i < data.pokemon.length ; i++){
    console.log(data.pokemon[i].name);
    }
};

showPokemonData();

// MOSTRAR PÁGINA POKÉDEX
document.getElementById("firstButton").addEventListener("click", hideAndShow);

function hideAndShow(){
    document.getElementById("firstPage").classList.add("hidden");
    document.getElementById("secondPage").classList.remove("hidden");
}

// MOSTRAR Y OCULTAR MENU DESPLEGABLE (SIDEBAR)
document.querySelector(".toggle-btn").addEventListener("click", showSidebar);

function showSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
}



