try {
  console.log(i);
} catch (error) {
  console.error(`Erreur attrapée : `, error);
  const p = document.createElement("p");
  p.textContent = "Erreur : la variable i n'existe pas !!!";
  document.body.appendChild(p)
}

console.log(`HelloWorld`);

/**
 * additionne les deux paramètres
 * @param {Number} a 
 * @param {Number} b 
 * @returns 
 */

function add(a, b) {
  if( typeof(a) !== "number" || typeof(b) !== "number") {
    console.log(`testBob`);
    throw new Error("a et b doivent être des nombres");
  }
  console.log(a + b);
}
try {
  add("qsdf", 1);
} catch (error) {
  console.error(`Erreur attrapée : `, error);
}



