import React from "react";
import ArtistCard from "./artist-card.js";

class SearchResult extends React.Component {
  state = {
    data: "",
  };
  componentDidMount() {
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=fdcf06f09a9f1358d1b2d4df6313b88c&format=json"
    );
  }

  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "api");
    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h1>{this.props.busqueda}</h1>
            {/*{this.state.artist.map((item, i) => {
              return <ArtistCard img={item.image} titulo={item.name} key={i} />;
            })}*/}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
