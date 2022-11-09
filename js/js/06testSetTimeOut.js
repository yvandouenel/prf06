function afficheNombreAvecDecalage(number, timer) {
  setTimeout(() => {
    console.log(`number : `, number);
  }, timer);
  if(number < 5) {
    let num = number + 1;
    timer = timer + 1000;
    afficheNombreAvecDecalage(num, timer);
  }
}
afficheNombreAvecDecalage(0, 1000);



