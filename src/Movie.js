import React from 'react';

const Movie = props =>
  React.createElement('div', { className: 'movie-container' }, [
    React.createElement('h1', {}, props.title),
    React.createElement('span', {}, props.date)
  ]);

export default Movie;
