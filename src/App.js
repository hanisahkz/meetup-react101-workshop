import React from 'react';
import Movie from './Movie';
import { loadMovies } from './api';

class App extends React.Component {
  state = {
    showMovies: false,
    movies: []
  };

  componentDidMount() {
    loadMovies().then(movies => this.setState({ movies }));
  }

  toggleMovies = () =>
    this.setState(prevState => ({
      showMovies: !prevState.showMovies
    }));

  render() {
    return (
      <div>
        <div className="title-bar">
          <h1>React Movie App</h1>
        </div>
        <div className="button-container">
          <button onClick={this.toggleMovies} className="button">
            {this.state.showMovies ? 'Hide' : 'Show'} Movies
          </button>
        </div>
        {this.state.showMovies &&
          this.state.movies.map(movie => (
            <Movie
              name={movie.name}
              releaseDate={movie.releaseDate}
              key={movie.id}
            />
          ))}
      </div>
    );
  }
}

export default App;
