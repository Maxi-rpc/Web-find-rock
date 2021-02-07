import React from "react";
import ArtistCard from "./artist-card.js";

class SearchResult extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
              <h1>{this.props.busqueda}</h1>
            <ArtistCard
              img="https://images-na.ssl-images-amazon.com/images/I/51WEA3EBB1L.jpg"
              titulo="Iron Maiden"
            />
            <ArtistCard
              img="https://images-na.ssl-images-amazon.com/images/I/51WEA3EBB1L.jpg"
              titulo="Dream Theater"
            />
            <ArtistCard
              img="https://images-na.ssl-images-amazon.com/images/I/51WEA3EBB1L.jpg"
              titulo="Slayer"
            />
            <ArtistCard
              img="https://images-na.ssl-images-amazon.com/images/I/51WEA3EBB1L.jpg"
              titulo="Fear Factory"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
