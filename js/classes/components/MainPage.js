import Utils from "../Utils.js";
import University from "./University.js";

export default class MainPage extends Utils{
    render(univs) {
        // Teste si les résultas sont affichés et les supprime le cas échéant
        if (document.getElementById("span-nb-result")) {
            document.getElementById("span-nb-result").remove();
        }

        // Création du span qui affiche le nombre de résultats
        this.createMarkup("span", "Nombre total d'universités " + univs.length, document.getElementById("nb-results"), { name: "id", value: "span-nb-result" });

        // Création des objets univ et affichage
        univs.forEach(univ => {
            new University(univ.name, univ.web_pages[0], document.getElementById("list-univ"));
        })
    }
}