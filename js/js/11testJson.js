// Objet littéral js. On n'utilise pas le mot clé new
const b1 = {
  nb_wheels: 2,
  brand: "Peugeot",
  fixed: [
    {date: "2022-06-12", type: "flat"},
    {date: "2022-08-12", type: "bent"}
  ]
  moove: function(){
     console.log(`Je me déplace`); 
  }
}
console.log(`b1`, b1);
b1.moove();



