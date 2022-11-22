import FetchUniversities from "../classes/services/FetchUniversities.js";
import MainPage from "../classes/components/MainPage.js"

let univs = [];
// Gestion du formulaire
const form = document.querySelector("form");
form.onsubmit = async function (e) {
  console.log(`Dans form.onsubmit`);
  e.preventDefault();
  // va chercher la value de l'option sélectionnée 
  const country = form.querySelector("select").value;
  console.log(`country `, country);

  // Va chercher les données pour ce pays en attendant les résultats
  univs = await FetchUniversities.getUniversities(country);

  // Création du composant qui gère l'affichage de la page principale
  const main_page = new MainPage();
  main_page.render(univs);
}
