var React = require('react');

var Movie = require('./Movie.jsx');

var MovieAPI = require('./MovieAPI.js');

var Movies = React.createClass({
	render: function () {
		var movies = MovieAPI.fetchMovies().map(function (movie) {
			return <Movie key={movie.id} movie={movie} />
		});

		return (
			<ul className="row">
				{movies}
			</ul>
		);
	}
});

module.exports = Movies;
