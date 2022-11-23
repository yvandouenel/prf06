import FetchUniversities from "../classes/services/FetchUniversities.js";
import MainPageResults from "../classes/components/MainPageResults.js";
import FormFilter from '../classes/components/FormFilter.js';

let univs = [];
// Gestion du formulaire de choix du pays
const form = document.querySelector("form");
form.onsubmit = async function (e) {
  console.log(`Dans form.onsubmit`);
  e.preventDefault();
  // va chercher la value de l'option sélectionnée 
  const country = form.querySelector("select").value;
  console.log(`country `, country);

  // Va chercher les données pour ce pays en attendant les résultats
  univs = await FetchUniversities.getUniversities(country);

  // Création du composant qui gère l'affichage des résultats
  const main_page_results = new MainPageResults();
  main_page_results.render(univs);

  if(!document.getElementById("form-filter")) new FormFilter(document.getElementById("wrapper-form-filter"), handleFilterUniversities);
}

// Gestion du formualire de filtre du nom des universités
function handleFilterUniversities(string_filter) {

  // on modifie univ en le filtrant
  let univs_filtered = univs.filter(univ => {
    console.log(`univ.name`, univ.name, string_filter);
    return univ.name.includes(string_filter);
  });
  console.log(`univs filtré : `, univs_filtered);
  // Création du composant qui gère l'affichage de la page principale
  const main_page_results = new MainPageResults().render(univs_filtered);
}