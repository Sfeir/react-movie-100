'use strict';

var React = require('react');

var MOVIES = require('./api/MoviesData.js');

var Movie = require('./Movie.jsx');

var Movies = React.createClass({
	render: function () {
		var movies = MOVIES.map(function (movie) {
			return <Movie key={movie.id} movie={movie} />;
		});

		return (
			<div>
				<ul className="row">
					{movies}
				</ul>
				<a className="new-movie-btn btn-floating btn-large waves-effect waves-light red">
					<i className="material-icons">add</i>
				</a>
			</div>
		);
	}
});

module.exports = Movies;
