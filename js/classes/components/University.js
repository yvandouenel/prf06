import Utils from "../Utils.js";

export default class University extends Utils {
    constructor(name, website, parent) {
        super();
        this.name = name;
        this.website = website;
        this.parent = parent;

        this.render();
    }
    render() {
        const elt_wrapper_univ = this.createMarkup("section", "", this.parent,{name:"class", value:"col-md-3"});
        const elt_border_univ = this.createMarkup("div", "", elt_wrapper_univ,{name:"class", value:"border rounded-5 mb-3 p-3"});
        const elt_name_univ = this.createMarkup("h2", this.name, elt_border_univ);
        const elt_website_univ = this.createMarkup("p", this.website, elt_border_univ);
    }
}