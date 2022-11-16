// Récupération d'une référence vers l'élément du dom qui a pour id h1
const h1 = document.getElementById("h1");

// Assignation de la propriété onclick
// Au click sur l'élément du Dom h1, la fonction assignée sera appelée
h1.onclick = function(e) {
  const event = e;
  handleClick(e,"Bob");
}
// Ici on utilise le "chaînage" pour assigner la fonction à la propriété onclick
document.querySelector("a#coopernet").onclick = function(e) {
  // suppresion du comportement par défaut attaché à cet événement
  e.preventDefault();
}

function handleClick(name) {
  console.log(`Salut , tu as cliqué sur  h1`);

  // Affiche l'objet du dom qui est à l'origine de l'événement
  console.log(`target`, e.target);
  
}