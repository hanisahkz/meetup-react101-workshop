
const Movie = props =>
  React.createElement('div', { className: 'movie-container' }, [
    React.createElement('h1', {}, props.title),
    React.createElement('span', {}, props.date)
  ]);

const App = function() {
  return React.createElement('div', {}, [
    React.createElement(
      'div',
      { className: 'title-bar' },
      React.createElement('h1', {}, 'React Movie App')
    ),
    React.createElement(Movie, {
      title: 'Some title',
      date: Math.random(10)
    }),
    React.createElement(Movie, {
      title: 'Some title',
      date: Math.random(10)
    }),
    React.createElement(Movie, {
      title: 'Some title',
      date: Math.random(10)
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));