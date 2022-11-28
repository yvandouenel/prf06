import "./App.css";
import University from "./components/University";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universities: [],
    };
  }
  componentDidMount() {
    fetch(`http://universities.hipolabs.com/search?country=France`)
      .then((response) => {
        console.log(`statut de la réponse`, response.status);
        if (response.status != 200) {
          throw new Error(
            "Problème de statut de la réponse du serveur" + response.statusText
          );
        } else {
          // Vérifie que l'on a bien récupéré du json
          return response.json(); // Renvoie une promesse dont le résultat ira dans le prochain then en cas de resolve (cas favorable)
        }
      })
      .then((data) => {
        console.log(`data : `, data);
        this.setState({ universities: data });
      })
      .catch((error) => {
        console.error(`Erreur catchée`, error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.universities.map((university, index) => (
            <University key={index} info={university} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
