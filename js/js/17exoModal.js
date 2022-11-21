// Récupérer une référence vers les modales
const modals = document.querySelectorAll(".modal");

// on cache les modales en utilisant la propriété visibility
modals.forEach(modal => {
  modal.hidden = true;
});

// Récupérer tous les éléments de la classe toggle-modal
const buttons_modals = document.querySelectorAll(".toggle-modal");

// Gestion des événements sur les boutons de class toggle-modal
buttons_modals.forEach(btn => {
  btn.onclick = function () {
    console.log(`click sur btn`);
    // Récupération de l'id de la modale à cacher 
    const modal_id = btn.getAttribute("data-target-modal");
    console.log(`modal_id`, modal_id);

    // on affiche ou on cache la modale qui correspond au bouton
    document.getElementById(modal_id).hidden = !document.getElementById(modal_id).hidden;
    
  }
})