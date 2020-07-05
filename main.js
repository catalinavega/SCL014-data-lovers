import pokemon from "./data/pokemon/pokemon.js";
console.log(pokemon);


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
