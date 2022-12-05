import { useState } from "react";
import Section from "./Section";

function App() {
  // Dans une fonction, le state se gère avec un hook d'état.
  // useState renvoie un tableau dont le premier élément est l'état
  // et le deuxième élément la fonction qui permet de modifier l'état
  // On utilise le "destructuring" pour déclarer et assigner l'état et la méthode qui permet de le modifier
  const [paragraphes, setParagraphes] = useState([
    {
      title: "Titre 1",
      text: "Texte du paragraphe 1",
      is_visible: false,
    },
    {
      title: "Titre 2",
      text: "Texte du paragraphe 2",
      is_visible: true,
    },
  ]);

  return (
    <div className="App">
      <h1>Paragraphes</h1>
      {/* On crée l'interface à partir du state et en utilisant la méthode map */}
      {paragraphes.map((paragraphe, index) => (
        <Section
          key={Math.random() * 10000}
          index={index}
          paragraphe={paragraphe}
          setParagraphes={setParagraphes}
          paragraphes={paragraphes}
        />
      ))}
    </div>
  );
}

export default App;
