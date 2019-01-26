import React from 'react';
import Movie from './Movie';

const App = function() {
  return React.createElement('div', {}, [
    React.createElement(
      'div',
      { className: 'title-bar' },
      React.createElement('h1', {}, 'React Movie App')
    ),
    React.createElement(Movie, {
      title: 'Title 1',
      date: Math.random(10)
    }),
    React.createElement(Movie, {
      title: 'Title 2',
      date: Math.random(10)
    }),
    React.createElement(Movie, {
      title: 'Title 3',
      date: Math.random(10)
    })
  ]);
};

export default App;
