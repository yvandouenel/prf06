{
  /**
   * Test d'une première fonction
   * @param {*} param1 
   * @return void
   */
  function test(param1) { // param1 est un paramètre 

    console.log(`tu as entré :  ` + param1); // concaténation
  }

  // Appel de fonction avec un argument ("Hello")
  test("Hello");
  test("World");
  /**
   * Additionne les 2 paramètres et renvoie le résultat
   * @param {Number} a 
   * @param {Number} b 
   * @returns Number
   */
  function add(a, b) {

    return a + b;
  }
  let result = add(5, 2); // On assigne le retour de la fonction
  console.log(result);

  result = add(458, 999966);
  console.log(result);
}
afficheNomDeFamille("Gonzalez"); // appel de la fonction avec
// l'argument "Gonzalez"

function afficheNomDeFamille(nom) { // définition de la fonction
  console.log(nom);
}

console.log(z);
