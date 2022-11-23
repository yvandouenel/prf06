import Utils from "../Utils.js";
import University from "./University.js";

export default class MainPageResults extends Utils {
    render(univs) {
        console.log(`dans render de MainPageResults`);
        // Teste si les résultas sont affichés et les supprime le cas échéant
        if (document.getElementById("span-nb-result")) {
            document.getElementById("span-nb-result").remove();
        }

        // Création du span qui affiche le nombre de résultats
        this.createMarkup("span", "Nombre total d'universités " + univs.length, document.getElementById("nb-results"), { name: "id", value: "span-nb-result" });

        // Création du wrapper des résultats
        if (document.querySelector(".wrapper-results")) document.querySelector(".wrapper-results").remove();
        const wrapper_results = this.createMarkup("section", "", document.getElementById("list-univ"), { name: "class", value: "wrapper-results row" });
        // Création des objets univ et affichage
        univs.forEach(univ => {
            new University(univ.name, univ.web_pages[0], wrapper_results);
        })
    }
}