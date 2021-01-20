import logo from "./logo.svg";
import React from "react";
import ArtistCard from "./components/artist-card.js";
import SearchBar from "./components/search-bar.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <div className="container">
          <div className="row">
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

export default App;
