import "./App.css";
import Fetcher from "./services/Fetcher";
import University from "./components/University";
import FormCountry from "./components/FormCountry";
import React, { Component } from "react";
import FormFilter from "./components/FormFilter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universities: [],
    };
  }
  async componentDidMount() {
    // Récupération des données
    const univs = await Fetcher.fetchUniversities("France");
    // changement du state via la fonction setState
    this.setState({ universities: univs });
  }
  handleChangeCountry = async (country) => {
    console.log(`handleChangeCountry`);
    // récupération des universités qui correspondent au pays
    const univs = await Fetcher.fetchUniversities(country);
    console.log(`country`, country);
    console.log(`this`, this);

    this.setState({ universities: univs });
    //modification du state
  };
  handleChangeFilter = async (filter_string) => {
    console.log(`handleChangeFilter`);
    const univs = this.state.universities.filter((univ) => {
      return univ.name.includes(filter_string);
    });

    //modification du state
    this.setState({ universities: univs });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <FormCountry handleChangeCountry={this.handleChangeCountry} />
          {/* Affiche le formulaire de filtre que s'il y a des résultats */}
          {this.state.universities.length > 0 && (
            <FormFilter handleChangeFilter={this.handleChangeFilter} />
          )}

          {/* Affichage des universités */}
          {this.state.universities.map((university, index) => (
            <University key={index} info={university} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
