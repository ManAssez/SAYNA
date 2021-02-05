let sommeBtn = document.querySelector("#somme");
let maxminBtn = document.querySelector("#maxmin");
let quotresteBtn = document.querySelector("#quotreste");
let produitBtn = document.querySelector("#produit");
let adivbBtn = document.querySelector("#adivb");
let diviseursBtn = document.querySelector("#diviseurs");
let nbpremierBtn = document.querySelector("#nbpremier");
let sommeChiffreBtn = document.querySelector("#sommeChiffre");

/**
 * function somme de deux entiers
 */
sommeBtn.addEventListener(
  "click",
  () => {
    let a = parseInt(prompt("Donner le premier entier"));
    let b = parseInt(prompt("Donner le deuxieme entier"));
    let s = 0;
    s = a + b;
    alert(`la somme de a et b est : ${s}`);
  },
  false
);
