import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import "./page-artist.css";
import SimilarArtist from "./components/similar-artist.js";
import Loading from "./components/loading.js";
import Error from "./components/error.js";

class PageSearchResult extends React.Component {
  state = {
    data: {
      artist: {
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        bio: {
          summary: "",
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
          ],
        },
      },
    },
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    let artista = this.props.history.location.search.substr(1);
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
        artista +
        "&api_key=fdcf06f09a9f1358d1b2d4df6313b88c&format=json"
    );
  }
  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message,
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        {this.state.loading && <Loading />}
        {this.state.error && (
          <Error errorMensaje={this.state.errorMensaje}></Error>
        )}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src={this.state.data.artist.image[3]["#text"]}
                alt=""
                className="pic-artist top50 margenes50"
              />
              <h2>{this.state.data.artist.name}</h2>
              <p>{this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtist data={this.state.data.artist.similar.artist} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
