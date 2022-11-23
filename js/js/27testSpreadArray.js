/* const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};*/
const addItemToCart = (cart, item) => {
  // spread operator (..) : copie le tableau et ajout des valeurs
  return [...cart, { item, date: Date.now() }, "toto"];
};

const my_cart = [];
 
const new_cart = addItemToCart(my_cart, "Dongle");

console.log("my_cart : ", my_cart);
console.log("new_cart : ", new_cart);