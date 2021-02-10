import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import "./page-artist.css";
import SimilarArtist from "./components/similar-artist.js";

class PageSearchResult extends React.Component {
  state = {
    busqueda: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/06/25093705/Gustavo-Cerati-Bocanada.jpg"
                alt=""
                className="pic-artist top50 margenes50"
              />
              <h2>Gustavo Cerati</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quam, consectetur tempore vel ea in recusandae aliquid
                exercitationem doloribus, mollitia iure incidunt voluptatum
                doloremque suscipit deleniti optio ex, adipisci non?
              </p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtist />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
