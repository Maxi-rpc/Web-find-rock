import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";

class PageSearchResult extends React.Component {
  state = {
    busqueda: "",
  };
  componentDidMount() {
    console.log("componentDidMount()", "Luego del metodo render");
  }
  componentWillMount() {
    console.log("componentWillMount()", "antes del metodo render");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()", "Cuando me fui");
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log("render()", "Estoy en render");
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
