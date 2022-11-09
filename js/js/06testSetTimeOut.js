function afficheNombreAvecDecalage(number, timer) {
  setTimeout(() => {
    console.log(`number : `, number + 1);
    if(number < 4) {
      number ++;
      // Appel récursif
      afficheNombreAvecDecalage(number, timer);
    }
  }, timer);
  
}
afficheNombreAvecDecalage(0, 1000);

