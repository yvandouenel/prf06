export default class Fetcher {
  static fetchUniversities(country) {
    return fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => {
        console.log(`statut de la réponse`, response.status);
        if (response.status != 200) {
          throw new Error(
            "Problème de statut de la réponse du serveur" + response.statusText
          );
        } else {
          // Vérifie que l'on a bien récupéré du json
          return response.json(); // Renvoie une promesse dont le résultat ira dans le prochain then en cas de resolve (cas favorable)
        }
      })
      .then((data) => {
        console.log(`data : `, data);
        return data;
      })
      .catch((error) => {
        console.error(`Erreur catchée`, error);
      });
  }
}
