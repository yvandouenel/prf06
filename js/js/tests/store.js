// Export d'un ojet qui contient la référence à 2 fonctions qui permettent d'interagir avec la variable state. Il n'y a pas d'autre façon de modifer ou d'obtenir state.
function createStore() {
  let state = 0;
  function getState() {
    return state;
  }
  function setState(value) {
    // Attention le state ne doit jamais être supérieur à 10
    if(value > 10) {
      console.error("Le state ne doit pas être égal à 10");
      throw new Error("Trump is back!");
    }
    state = value;
  }
  return {
    getState,
    setState
  }
}
export default createStore(); // J'exporte le retour de createStore