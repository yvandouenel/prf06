// Gestion du formulaire
const form = document.querySelector("form");
form.onsubmit = function (e) {
  console.log(`Dans form.onsubmit`);
  e.preventDefault();
  // va chercher la value de l'option sélectionnée 
  const country = form.querySelector("select").value;
  console.log(`country `, country);

  // Va chercher les données pour ce pays
  getUniversities(country);
}
function getUniversities(country) {
  fetch(`http://universities.hipolabs.com/search?country=${country}`)
    .then(response => {
      console.log(`statut de la réponse`, response.status);
      if (response.status != 200) {
        throw new Error("Problème de statut de la réponse du serveur" + response.statusText);
      } else {
        // Vérifie que l'on a bien récupéré du json
        return response.json(); // Renvoie une promesse dont le résultat ira dans le prochain then en cas de resolve (cas favorable)
      }
    })
    .then(data => {
      console.log(`data : `, data);
      univs = data;
    })
    .catch(error => {
      console.error(`Erreur catchée`, error);
    })
}
let univs = [];
// Je vais chercher les données 
