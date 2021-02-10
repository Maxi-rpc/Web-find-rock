import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./page-search-result";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import Layout from "./components/layout.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult}></Route>
            <Route exact path="/artista" component={PageArtist}></Route>
            <Route path="/" component={PageHome}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
