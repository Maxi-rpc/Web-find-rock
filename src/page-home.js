import React from "react";
import "./page-home.css";
import logo from "./logo.svg";

class PageHome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
              <img src={logo} alt="" id="logo"/>
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="FOrm"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.props.onChange}
                />
              </div>
              <div className="actions">
                  <button className="btng">Search Similar Artist</button>
                  <button className="btng">EscuelaDevRock</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
