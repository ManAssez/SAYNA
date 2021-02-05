let sommeBtn = document.querySelector("#somme");
let factorielBtn = document.querySelector("#factoriel");
let divisible = document.querySelector("#divisible");
let voyelleBtn = document.querySelector("#voyelle");
let quotreste = document.querySelector("#quotreste");
let permuter = document.querySelector("#permuter");
let abs = document.querySelector("#abs");

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

/**
 * function factorielle
 */
factorielBtn.addEventListener(
  "click",
  () => {
    let f, n;
    n = parseInt(prompt("Donner un entier N>0"));
    f = 1;
    for (let i = 1; i <= n; i++) {
      f = f * i;
    }
    alert(`La factorielle de  ${n}  est : ${f}`);
  },
  false
);

/**
 * function divisible de deux entiers
 */
divisible.addEventListener(
  "click",
  () => {
    let a = parseInt(prompt("Donner le premier entier"));
    let b = parseInt(prompt("Donner le deuxieme entier"));
    let s = 0;
    s = a + b;
    if (a % b == 0) {
      alert(`${a} est divisible par ${b}`);
    } else {
      alert(`${a} n'est pas divisible par ${b}`);
    }
  },
  false
);

/**
 * function quot reste
 */
quotreste.addEventListener(
  "click",
  () => {
    let a, b, q, r;
    a = parseInt(prompt("Entrer a"));
    b = parseInt(prompt("Entrer b"));
    q = 0;
    r = a;
    while (r > b) {
      q += 1;
      r = r % b;
    }
    alert(`Le Quotient de A/B est : ${q} Le reste de A/Best : ${r}`);
  },
  false
);

/**
 * function voyelle
 */
voyelleBtn.addEventListener(
  "click",
  () => {
    let v = false;
    a = prompt("Entrer une lettre");
    switch (a) {
      case "a":
      case "e":
      case "i":
      case "u":
      case "y":
      case "o":
        alert(`${a} est une voyelle`);
        break;

      default:
        alert(`${a} n'est pas une voyelle`);
        break;
    }
  },
  false
);

/**
 * function permutation de deux entiers
 */
permuter.addEventListener(
  "click",
  () => {
    let a = parseInt(prompt("Donner le premier entier"));
    let b = parseInt(prompt("Donner le deuxieme entier"));
    let c = 0;
    alert(`Avant a = ${a} et b = ${b}`);
    c = a;
    a = b;
    b = c;
    alert(`Après a = ${a} et b = ${b}`);
  },
  false
);

/**
 * function valeur absolue
 */
abs.addEventListener(
  "click",
  () => {
    let a = parseInt(prompt("Donner un entier"));
    if (a < 0) a = -a;

    alert(`La valeur absolue de cet nombre est ${a}`);
  },
  false
);
