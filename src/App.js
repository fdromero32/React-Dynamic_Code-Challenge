import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import movies from "./store/movies";
import Movie from "./pages/Movie";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movies
    };
  }

  render() {
    return (
      <>
        <Router>
          <div>
            <h2>Movies</h2>
            <ul>
              {this.state.allMovies.map((movie, index) => (
                <li key={index}>
                  <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
                </li>
              ))}
            </ul>
            <Switch>
              <Route
                path="/movies/:id"
                render={props => (
                  <Movie {...props} movies={this.state.allMovies} />
                )}
              />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
