import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./page-search-result";
import PageHome from "./page-home.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageHome />
      </React.Fragment>
    );
  }
}

export default App;
