
//const h1 = document.getElementById("h1");
// querySelector renvoie le premier élément qui correspond à la requête
const h1 = document.querySelector("h1");
h1.textContent = "Toto";
h1.setAttribute("id", "bibi");
h1.setAttribute("class", "toto");

console.log(`id du premier h1 : `, h1.getAttribute("id"));
//h1.remove();

const h1s = document.querySelectorAll("*");

/* h1s.forEach((h1) => {
  console.log(h1.tagName);
}) */

// Création d'un élément du dom
const p = document.createElement("p");
p.textContent = "Blabla bla bla";
p.setAttribute("class", "warning");

window.document.body.appendChild(p);
/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajout un attribut en utilisant le paramètre attribute
   * @param {String} markup_name 
   * @param {String} text 
   * @param {domElement} parent 
   * @param {Object} attribute  (doit comprendre les propriétés name et value)
   * @returns domElement
   */
function createMarkup(markup_name, text, parent, attribute) {
  const markup = document.createElement(markup_name);
  markup.textContent = text;
  parent.appendChild(markup);
  if (attribute && attribute.hasOwnProperty("name")) {
    markup.setAttribute(attribute.name, attribute.value);
  }
  return markup;
}
const p2 = createMarkup("p", "Hello ", document.body, { name: "class", value: "danger" });
const span = createMarkup("span", "George", p2);

// Correction de l'exercice  
const header = createMarkup("header", "", document.body);
const nav = createMarkup("nav", "", header);
const buttons = [];

// Création des boutons via une boucle
for (let i = 0; i < 4; i++) {
  // Ajout de l'élement du DOM créé dans la tableau buttons
  buttons.push(createMarkup("button", "Item " + (i + 1), nav));

}

// couleur rouge
buttons[0].style.color = "red";

