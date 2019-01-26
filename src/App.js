import React from 'react';
import Movie from './Movie';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMovies: false
    };
    this.showMovies = this.showMovies.bind(this);
  }

  showMovies() {
    this.setState({
      showMovies: true
    });
  }

  render() {
    let movies;

    if (this.state.showMovies) {
      movies = (
        // <React.Fragment>
        //   <Movie name="Aquaman" releaseDate="2018-12-07" />
        //   <Movie name="Bumblebee" releaseDate="2018-12-15" />
        //   <Movie
        //     name="Fantastic Beasts: The Crimes of Grindelwald"
        //     releaseDate="2018-11-14"
        //   />
        // </React.Fragment>

        // is equivalent to this:
        <>
          <Movie name="Aquaman" releaseDate="2018-12-07" />
          <Movie name="Bumblebee" releaseDate="2018-12-15" />
          <Movie
            name="Fantastic Beasts: The Crimes of Grindelwald"
            releaseDate="2018-11-14"
          />
        </>
      );
    }

    return (
      <div>
        <div className="title-bar">
          <h1>React Movie App</h1>
        </div>
        <div className="button-container">
          <button onClick={this.showMovies} className="button">
            Show Movies
          </button>
        </div>
        {movies}
      </div>
    );
  }
}

export default App;
