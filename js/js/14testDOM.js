
//const h1 = document.getElementById("h1");
// querySelector renvoie le premier élément qui correspond à la requête
const h1 = document.querySelector("h1");
h1.textContent = "Toto";
h1.setAttribute("id", "bibi");
h1.setAttribute("class", "toto");

console.log(`id du premier h1 : `, h1.getAttribute("id"));

/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajout un attribut en utilisant le paramètre attribute
   * @param {Object} dom_element 
   * @returns domElement
   */
function createMarkup(dom_element) {
  const markup = document.createElement(dom_element.markup_name);
  markup.textContent = dom_element.text;
  dom_element.parent.appendChild(markup);
  if (dom_element.attributes && dom_element.attributes.hasOwnProperty("length")) {
    dom_element.attributes.forEach(attribute => {
      markup.setAttribute(attribute.name, attribute.value);
    })
  }
  return markup;
}

const p2 = createMarkup({
  markup_name: "p",
  text: "Hello ",
  parent: document.body,
  attributes: [
    { name: "class", value: "danger" },
    { name: "id", value: "jojo" }
  ]
}
);


const span = createMarkup({
  markup_name: "span",
  text: "George",
  parent: p2
});

// Correction de l'exercice  
/* const header = createMarkup("header", "", document.body);
const nav = createMarkup("nav", "", header);
const buttons = [];

// Création des boutons via une boucle
for (let i = 0; i < 4; i++) {
  // Ajout de l'élement du DOM créé dans la tableau buttons
  buttons.push(createMarkup("button", "Item " + (i + 1), nav));

}

// couleur rouge
buttons[0].style.color = "red"; */

