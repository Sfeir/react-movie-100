'use strict';

var React = require('react');

var MOVIES = require('./api/MoviesData.js');

var Movie = require('./Movie.jsx');

var Movies = React.createClass({
	render: function () {
		return (
			<div>
				<ul className="row">
					<Movie movie={MOVIES[0]} />
					<Movie movie={MOVIES[1]} />
					<Movie movie={MOVIES[2]} />
					<Movie movie={MOVIES[3]} />
				</ul>
				<a className="new-movie-btn btn-floating btn-large waves-effect waves-light red">
					<i className="material-icons">add</i>
				</a>
			</div>
		);
	}
});

module.exports = Movies;
