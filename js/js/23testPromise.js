/**
 * resolve est appelée dans le cas favorable et l'argument se retrouvera en
 * premier paramètre de la fonction de callback de then (cf // récupération de l'appel de resolve)
 * 
 * reject est appelée dans le cas défavorable et l'argument se retrouvra en 
 * premier paramètre de de la fonction de callback de catch (cf // Récupération de l'erreur envoyée par reject)
 * @returns Promise
 */
function getToken() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      if(Math.random() > 0.5) {
        console.log(`cas favorable`);
        resolve("QSFQSFDFLSLDFOSDLFMLDS");
      }
      else {
        console.log(`cas défavorable`);
        reject(new Error("Problème de token"));
      }
    }, 1000);
  })
}

function getUser(token) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      if(token && Math.random() > 0.5) {
        console.log(`cas favorable`);
        resolve({login: "Toto", id: "4599"});
      }
      else {
        console.log(`cas défavorable`);
        reject(new Error("L'utilisateur n'est pas identifié"));
      }
    }, 1000);
  })
}

getToken()
.then(token => {// récupération de l'appel de resolve
  console.log(`token : `, token);
  return getUser(token);
})
.then(user => {
  console.log(`user : `, user);
})
.catch(error => {// Récupération de l'erreur envoyée par reject
  console.error(`Erreur attrapée : `, error);
})