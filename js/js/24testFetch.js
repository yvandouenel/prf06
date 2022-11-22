
fetch("https://www.coopernet.fr/session/token")//endpoint
  .then(function(response) {
    console.log(`status`, response.status);
    console.log(`statusText`, response.statusText);
    if (response.status !== 200) { // si ça c'est mal passé
      throw new Error("Le serveur n'a pas répondu correctement");
    } else return response.text(); // renvoie une promesse
  })
  .then(function(data) { // data correspond au retour du résolve (ici deux lignes au dessus)
    console.log("Token récupéré : ", data);
  })
  .catch(error => {console.log("Erreur attrapée : ", error)});