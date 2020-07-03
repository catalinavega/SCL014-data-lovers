// import { example } from './data.js';
// // import data from './data/atletas/atletas.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

// MOSTRAR PÁGINA POKÉDEX
document.getElementById("firstButton").addEventListener("click", hideAndShow);

function hideAndShow(){
    document.getElementById("firstPage").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("secondPage").classList.remove("hidden");
}

// MOSTRAR Y OCULTAR MENU DESPLEGABLE (SIDEBAR)
document.querySelector(".toggle-btn").addEventListener("click", showSidebar);

function showSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
}