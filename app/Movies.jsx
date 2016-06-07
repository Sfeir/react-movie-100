'use strict';

var React = require('react');

var MovieAPI = require('./api/MovieAPI');

var Movie = require('./Movie.jsx');
var MovieForm = require('./MovieForm.jsx');

var Movies = React.createClass({
	getInitialState: function () {
		return {
			movies: [],
			creating: false
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

	addMovie: function (movie) {
		MovieAPI.addMovie(movie)
		.then(function (newMovie) {
			var newMovieList = this.state.movies.concat([newMovie]);

			this.setState({
				movies: newMovieList,
				creating: false
			});
		}.bind(this));
	},

	deleteMovie: function (movieID) {
		MovieAPI.removeMovie(movieID)
		.then(function () {
			var newMovieList = this.state.movies.filter(function (movie) {
				return movie.id !== movieID;
			});

			this.setState({movies: newMovieList});

		}.bind(this));
	},

	showMovieForm: function () {
		this.setState({
			creating: true
		});
	},

	renderMovieList: function () {
		var movies = this.state.movies.map(function (movie) {
			return <Movie key={movie.id} movie={movie} onDelete={this.deleteMovie.bind(this, movie.id)} />;
		}, this);

		return (
			<div>
				<ul className="row">
					{movies}
				</ul>
				<a className="new-movie-btn btn-floating btn-large waves-effect waves-light red" onClick={this.showMovieForm}>
					<i className="material-icons">add</i>
				</a>
			</div>
		);
	},

	renderNewMovieForm: function () {
		return <MovieForm onSave={this.addMovie}/>;
	},

	render: function () {
		return this.state.creating ? this.renderNewMovieForm() : this.renderMovieList();
	}
});

module.exports = Movies;
