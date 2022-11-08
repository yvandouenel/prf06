// Déclaration de la fonction creerFonction
function creerFonction() {
  // déclaration et assignation de la variable nom
  let nom = "Mozilla";

  // Déclaration de la fonction afficheNom
  function afficheNom() {
    console.log(nom);
  }

  // retourne la référence à la fonction afficheNom
  return afficheNom;
}

let maFonction = creerFonction();// à ne pas confondre avec let maFonction = creerFonction;
maFonction();