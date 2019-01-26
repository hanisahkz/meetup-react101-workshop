// Movie component that has div > h2, h1
//   const Movie = () =>
//     React.createElement("div", { className: "movie-container" }, [
//       React.createElement("h1", {}, "Aquaman"),
//       React.createElement("span", {}, "2018-12-07")
//     ]);

const Movie = props =>
  React.createElement('div', { className: 'movie-container' }, [
    React.createElement('h1', {}, props.title),
    React.createElement('span', {}, props.date)
  ]);

const App = function() {
  //   App component needs to have Movie component inside
  // So, pass the Movie component in a form of array
  // this is how the component Movie will be rendered
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

//   const App = function() {
//     //   React.createelement 1st params - the html tag
//     // 2nd tag can be like {id:'HTMLID'}
//     return React.createElement(
//       "div",
//       {},
//       React.createElement("h1", {}, "React Movie  App")
//     );
//   };

ReactDOM.render(React.createElement(App), document.getElementById('root'));
