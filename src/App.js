import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./page-search-result";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageSearchResult />
      </React.Fragment>
    );
  }
}

export default App;
