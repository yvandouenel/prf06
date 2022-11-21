// Fonction constructeur trotinette (Scooter)
/**
 * @param {String} brand 
 * @param {Number} weight en kilogrammes
 * @param {Number} height en cm
 * @param {Number} wheel_size en cm
 */
class Scooter {
  static danger = true;

  constructor(brand, weight, height, wheel_size) {
    // Propriétés de type primitifs
    this.brand = brand;
    this.weight = weight;
    this.height = height;
    this.wheel_size = wheel_size;
  }
  // Méthodes (propriétés de type function)
  cruise() {
    console.log(`Je suis de la marque ${this.brand} et je roule à ma vitesse max : ${this.maxSpeed()} Km/h`);
  }
  maxSpeed() {
    return (this.weight * this.height * this.wheel_size / 1000);
  }
  isDangerous() {
    return Scooter.danger;
  }

}
// Instanciations des trotinettes
const scooter1 = new Scooter("Xiaomi", 15, 120, 25);
const scooter2 = new Scooter("Peugeot", 12, 80, 18);
const scooter3 = new Scooter("Agila", 10, 85, 19);

console.log(`scooter1`, scooter1);
console.log(`scooter2`, scooter2);

// Appel d'une fonction attachée à un objet (une méthode)
scooter1.cruise();
scooter2.cruise();

class EScooter extends Scooter {
  constructor(brand, weight, height, wheel_size, watt){
    super(brand, weight, height, wheel_size);
    this.watt = watt;
  }
  maxSpeed() {
    return super.maxSpeed() + 5000;
  }
}

const es1 = new EScooter("Segway", 25, 120, 25, 250);
console.log(`es1`, es1);
es1.cruise();

console.log(`Danger : `, es1.isDangerous());

class MyString extends String {
  
}

const ms = new MyString("Hello World" );
console.log(`ms : `, ms.split("o"));

console.log("Nom de la classe : ", scooter1.constructor.name);
console.log("Prototype : ", Object.getPrototypeOf(scooter1));
console.log("Prototype : ", Object.getPrototypeOf(Object.getPrototypeOf(scooter1)));

class A {}
class B extends A {}
class C extends B {}
function logClasses(object) {
  while (object) {
    object = Object.getPrototypeOf(object);
    if(object) console.log("classe : ",object.constructor.name);
  }

}
logClasses(new C());
