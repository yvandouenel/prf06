import "./App.css";
import Fetcher from "./services/Fetcher";
import University from "./components/University";
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
