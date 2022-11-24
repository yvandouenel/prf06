
import Utils from '../Utils.js';
export default class FormFilter extends Utils {
  constructor(parent, handleFilterUniversities) {
    super();
    this.parent = parent;
    this.dom_elements = this.render();
    this.handleFilterUniversities = handleFilterUniversities;
    // gestion des événements
    this.handleFormFilterSubmit();
    this.handleInputFilter();

  }
  handleFormFilterSubmit() {
    console.log(`dom_elements`, this.dom_elements);
    this.dom_elements.elt_form.onsubmit = (e) => {
      e.preventDefault();
      console.log(`dans handleFormFilterSubmit`);
      this.handleFilterUniversities(this.dom_elements.elt_input.value);
    }
  }
  handleInputFilter() {
    
    // Fonction fléchée gestionnaire d'événement
    this.dom_elements.elt_input.oninput = (e) => {
      e.preventDefault();
      console.log(`this : `, this); // instance de FormFilter ?
      this.handleFilterUniversities(this.dom_elements.elt_input.value);
    };
  }
  render() {
    const elt_form = this.createMarkup("form", "", this.parent, { name: "id", value: "form-filter" });
    const elt_label = this.createMarkup("label", "Filtrer", elt_form, { name: "for", value: "filter-input" });
    const elt_input = this.createMarkup("input", "", elt_form, { name: "id", value: "filter-input" });
    return { elt_form, elt_input }
  }
}