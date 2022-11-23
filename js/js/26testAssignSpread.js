function addPropertyToto(object) {
  //const copy_toto = Object.assign({}, object);// copie par valeur
  // Le spread operator (...) permet de copier par valeur l'objet et lui ajouter des propriétés
  const copy_toto = {... object, toto: "Hello Toto"};
  //copy_toto.toto = "Hello Toto";
  return copy_toto;
}
const bob = {name: "Bob"};
const copy_toto = addPropertyToto(bob);


console.log("bob", bob);
console.log("copy_toto", copy_toto);

function addStringToto(string) { // passage par valeur
  return string + "Toto";
}

const machaine = "HelloWorld";
const monAutrechaine = addStringToto(machaine);
console.log("machaine", machaine);
console.log("monAutrechaine", monAutrechaine);