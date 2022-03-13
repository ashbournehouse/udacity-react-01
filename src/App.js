import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
  render() {
    return (
      React.createElement('div', {},
        React.createElement('header', {className: "App-header"},
          React.createElement('img', {src: logo, className: "App-logo", alt: "logo"}, null),
          React.createElement('img', {src: logo, className: "App-logo", alt: "logo"}, null),
          React.createElement('img', {src: logo, className: "App-logo", alt: "logo"}, null),
          React.createElement('h1', {className: "App-title"}, 'ReactND - Coding Practice'),
        ),
        React.createElement('div', {style: {backgroundColor:'#333399'}},
          React.createElement('p', {style: {color:'#ffff33'}}, 'Render without JSX goes here.'),
          React.createElement('ul', {},
            React.createElement('h2', {style: {color:'#ffff33'}},
              `Favorite Movies (using React.createElement)`,
              /*Iterate using .map*/
              profiles.map(profile => {
                const userID = profile.userID;
                const userName = users[userID].name
                const favoriteMovieID = profile.favoriteMovieID;
                const favoriteMovie = movies[favoriteMovieID].name;
                return (
                  React.createElement('li', {},
                    React.createElement('p', {}, `${userName} favorite movie is: ${favoriteMovie}`)
                  )  /* End of React.createElement('li', ...  */
                )  /* End of return function */
              }  /* End of arrow function */
              )  /* End of profiles.map */
            )  /* End of React.createElement('h2', ...  */
          )  /* End of React.createElement('ul', ...  */
        ),  /* End of React.createElement('div', ...  */

        <div id="UsingJsx" style={{backgroundColor:'#66aa66'}}>
          <p>Render with JSX goes here.</p>
  		    <ul>
          	<h2>Favorite Movies (using JSX)</h2>
  			     {/* Iterating using .map */}
  			     {profiles.map(profile => {
            	const userID = profile.userID;
              const userName = users[userID].name
  				    const favoriteMovieID = profile.favoriteMovieID;
  				    const favoriteMovie = movies[favoriteMovieID].name;
            	return (
            		<li key={profile.id}>
  						    <p>{`${userName}\'s favorite movie is ... "${favoriteMovie}".`}</p>
  				      </li>
  				    );
  			     })}
  		    </ul>
        </div>
      ))};
  }

export default App;
