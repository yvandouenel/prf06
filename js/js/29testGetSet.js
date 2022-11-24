class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    console.log("Occasion de faire des traitements");
    return this._name;
  }
  set name(new_name) {
    console.log("Occasion de faire des traitements ou de mettre à jour le dom");
    this._name = new_name;
  }
}
const p = new Person("Dylan");
console.log("name : ", p.name); // ici je passe par get name()
p.name = "Dupond"; // ici je passe par set name()
console.log("name : ", p.name);
