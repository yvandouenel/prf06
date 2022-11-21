// Récupérer une référence vers les modales
const modals = document.querySelectorAll(".modal");


// Récupérer tous les éléments de la classe toggle-modal
const buttons_modals = document.querySelectorAll(".toggle-modal");

// Gestion des événements sur les boutons de class toggle-modal
buttons_modals.forEach(btn => {
  btn.onclick = function () {
    // Récupération de l'id de la modale à cacher 
    const modal_id = btn.getAttribute("data-target-modal");

    // on affiche ou on cache la modale qui correspond au bouton
    document.getElementById(modal_id).hidden = !document.getElementById(modal_id).hidden;

    // On fait en sorte que le body ne fasse pas plus que 100 vh
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  }
})


document.querySelectorAll(".modal").forEach(modal => {
  // Ajout du bouton qui permet de supprimer la modale
  const button_x = document.createElement("button");
  button_x.textContent = "X";
  modal.querySelector(".wrapper-modal > section").prepend(button_x);
  // positionnement à droite du bouton de suppression
  button_x.style.float = "right";
  // gestion de l'événement sur le bouton de suppresion
  button_x.onclick = function (e) {
    modal.hidden = true;
  }

  // Gestion du bouton du bas
  modal.querySelector(".remove-modal").onclick = function (e) {
    modal.hidden = true;
  }

  // Gestion des événements sur la modale
  modal.onclick = function (event) {
    console.log(`event.target`, event.target);
    // Si la "target" est l'élément de la classe wrapper-modal
    if (event.target.classList.contains("wrapper-modal") ) modal.hidden = true;
  }
  // on cache la modale 
  modal.hidden = true;
});