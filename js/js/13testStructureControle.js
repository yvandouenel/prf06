// déclaration et assignation
const i = 20;

if (i === 20) { // teste si i  et la valeur sont du même type et si leur valeur est égale
  console.log(`i est égal à 20`);
} else {
  console.log(`i n'est pas égal à 20`);
}

//boucle for
for (let j = 0; j < 10; j++) {
  console.log(j);
}

const gender = "qsdf";

switch (gender) {
  case "male":
    console.log(`Tu es burné`);
    break;
  case "female":
    console.log(`Tu as des seins`);
    break
  default:
    console.log(`shemale`);
}

let p1 = {"name": "Bob"};
let p2 = {"name": "Bob"};
let p3 = p1;
if (p1 === p2) console.log('p1 et p2 identiques');
if (p1 === p3) console.log('p1 et p3 identiques');

const jc = {
  nom: "Dusse",
  prenom: "Jean-Claude",
  sePresenter: function(){
    return "Bonjour, je m'appelle " +
    this.prenom + " " + this.nom;
  }
}
// La boucle for in est spécifiquement adaptée au parcours des 
// propriétés d'un objet
for(let key in jc) {
  // affichage du nom de chaque propriété
  console.log(`key :`, key);
  if(typeof(jc[key]) == "function") console.log(`valeur :`, jc[key]());
  else console.log(`valeur :`, jc[key]);
}