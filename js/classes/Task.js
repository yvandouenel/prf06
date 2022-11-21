import Utils from "./Utils.js";
export default class Task extends Utils {
  constructor(name) {
    super();
    this.name = name;

    this.render();
  }
  render() {
    this.createMarkup("section",this.name,document.body);
  }
}

export const test = "Hello";