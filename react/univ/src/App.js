import "./App.css";
import Fetcher from "./services/Fetcher";
import University from "./components/University";
import FormCountry from "./components/FormCountry";
import React, { Component } from "react";

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

  render() {
    return (
      <div className="container">
        <div className="row">
          <FormCountry handleChangeCountry={this.handleChangeCountry} />
          {this.state.universities.map((university, index) => (
            <University key={index} info={university} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
