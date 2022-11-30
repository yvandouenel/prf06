import { useEffect, useState } from "react";
import "./App.css";
import FormCountry from "./components/FormCountry";
import FormFilter from "./components/FormFilter";
import University from "./components/University";
import Fetcher from "./services/Fetcher";

function App() {
  /* HOOK d'ETAT 
  Déclaration et assignation des variables (destructuring).
  useState renvoi un tableau, 
    - premier élément est l'état.
    - Deuxième élément est la fonction qui premet de modifier l'état 
      (Par convention, on la nomme setLeNomDeLetat)
  Dans les parenthèses de useState, on met comme argument la valeur initiale de l'état.
  */
  const [universities, setUniversities] = useState([]);
  const [filter, setFilter] = useState("");
  const [pinnedUniversities, setPinnedUniversities] = useState([]);

  /**
   * Hook d'EFFET
   * les crochets vides indiquent qu'il n'y a pas de dépendance et dont useEffect ne sera appelé qu'une fois après le premier rendu
   */
  useEffect(() => {
    const getUniversities = async () => {
      setUniversities(await Fetcher.fetchUniversity("France"));
    };
    getUniversities();
  }, []); //Imite le componentDidMount

  return (
    <div className="container">
      <div className="row gap-3">
        <FormCountry setUniversities={setUniversities} />
        <FormFilter setFilter={setFilter} />
        {pinnedUniversities.map((university, index) => (
          <University
            key={index}
            univ={university}
            setPinnedUniversities={setPinnedUniversities}
            PinnedUniversities={pinnedUniversities}
          />
        ))}
        {universities
          .filter((university) =>
            university.name.toUpperCase().includes(filter.toUpperCase())
          )
          .map((university, index) => (
            <University
              key={index}
              index={index}
              univ={university}
              setPinnedUniversities={setPinnedUniversities}
              pinnedUniversities={pinnedUniversities}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
