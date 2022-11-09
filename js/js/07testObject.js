// Fonction constructeur trotinette (Scooter)
/**
 * @param {String} brand 
 * @param {Number} weight en kilogrammes
 * @param {Number} height en cm
 * @param {Number} wheel_size en cm
 */
function Scooter(brand, weight, height, wheel_size) {
  // Propriétés de type primitifs
  this.brand = brand;
  this.weight = weight;
  this.height = height;
  this.wheel_size = wheel_size;

}
// Propriétés du type function (cruise = rouler)
Scooter.prototype.cruise = function() {
  console.log(`Je suis de la marque ${this.brand} et je roule à ma vitesse max : ${this.maxSpeed()} Km/h`);
}
Scooter.prototype.maxSpeed = function() {
  return (this.weight * this.height * this.wheel_size / 1000);
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