// Tableau à index ou littéral
const fruits = ["banane", "pomme", "kiwi"];

console.log(`fruits : `, fruits);
console.log(`taille du tableau fruits : `, fruits["length"]);

fruits.push("fraise");

// Parcours du tableau et affichage de sa valeur
fruits.forEach((el, ind, ar) => {
  // Affichage de la valeur de chaque element
  console.log(`element`, el);
  // Affichage de l'indes de chaque élément
  console.log(`index`, ind);

  // Affichage du tableau complet
  console.log(`tableau`, ar);
});

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// Créer un nouveau tableau avec la méthode map à partir de "fruits" où chaque valeur sera "wrappée" dans un "li" Exemple : "Fraise" devient "<li>Fraise</li>"

const map1 = fruits.map(fruit => "<li>" + fruit  + "</li>");
const map2 = fruits.map(function(fruit) { return "<li>" + fruit  + "</li>"});

console.log(`map1`, map1);
console.log(`map2`, map2);

// Lire la doc de la fonction "Array.prototype.sort"  et 
// 1 : classer les fruits par ordre alphabétique 
// 2 : classer les fruits par ordre croissant de taille de longueur de la chaîne de caractères
const sortedFruits = fruits.sort(function(previous, next){
  if(next.length >= previous.length) return -1;
  else return 1;
});
console.log(`sortedFruits`, sortedFruits);

// Lire la doc de la fonction Array.prototype.filter et répondre à la question 
// cette fonction est-elle pure ? 
// filtrer le tableau fruits pour ne retenir que les fruits qui ont un "a" dans leur nom
// selon l'incroyable intuition de Rémi qui laisse par là même une trace dans l'histoire de notre formation 

const filtered_fruits = fruits.filter(
  fruit => fruit.includes("a")// Pour que le "fruit" soit gardé, il faut renvoyer "true"
);
console.log(`filtered_fruits`, filtered_fruits);

// Lire la doc de la fonction Array.prototype.reduce 
// Renvoyer au final que le fruit dont le nom est le plus long

const reducedFruits = fruits.reduce(function(accumulator, current){
  if(accumulator.length < current.length) accumulator = current;
  return accumulator;
});
console.log(`reducedFruits`, reducedFruits);

// Renvoyer, à l'aide de reduce, le nombre de caractères du fruit qui en comporte le moins
const reducedFruitsBis = fruits.reduce(function(accumulator, current){
  return (accumulator > current.length) ? current.length : accumulator;
  
}, fruits[0].length);
console.log(`reducedFruitsBis`, reducedFruitsBis.length);