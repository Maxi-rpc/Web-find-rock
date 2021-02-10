import React from "react";
import ArtistCard from "./artist-card.js";
class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar col-12">
          <div className="col-md-12 margenes50">
            <h3>Similar Artist</h3>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <ArtistCard
              img="http://placehold.it/350x350"
              titulo="titulo-prueba"
            />
          </div>
          <div className="col-md-3">
            <ArtistCard
              img="http://placehold.it/350x350"
              titulo="titulo-prueba"
            />
          </div>
          <div className="col-md-3">
            <ArtistCard
              img="http://placehold.it/350x350"
              titulo="titulo-prueba"
            />
          </div>
          <div className="col-md-3">
            <ArtistCard
              img="http://placehold.it/350x350"
              titulo="titulo-prueba"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
