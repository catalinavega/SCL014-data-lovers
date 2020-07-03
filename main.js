// import { example } from './data.js';
// // import data from './data/atletas/atletas.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

document.getElementById("firstButton").addEventListener("click", hideAndShow);

function hideAndShow(){
    document.getElementById("firstPage").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("secondPage").classList.remove("hidden");
}
