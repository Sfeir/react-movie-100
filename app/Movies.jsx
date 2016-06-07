'use strict';

var React = require('react');

var MovieAPI = require('./api/MovieAPI');

var Movie = require('./Movie.jsx');

var Movies = React.createClass({
	getInitialState: function () {
		return {
			movies: []
		};
	},

	componentWillMount: function () {
		MovieAPI.fetchMovies()
		.then(function (movies) {
			this.setState({
				movies: movies
			});
		}.bind(this));
	},

	render: function () {
		var movies = this.state.movies.map(function (movie) {
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
