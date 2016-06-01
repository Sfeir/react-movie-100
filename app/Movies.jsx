var React = require('react');

var Movie = require('./Movie.jsx');

var MovieAPI = require('./MovieAPI.js');

var MovieForm = require('./MovieForm.jsx');

var Movies = React.createClass({
	getInitialState: function () {
		return {
			movies: []
		}
	},

	deleteMovie: function (movieID) {
		var newMovieList = this.state.movies.filter(function (movie) {
			return movie.id !== movieID;
		});

		this.setState({
			movies: newMovieList
		});
	},

	componentDidMount: function () {
		var movies = MovieAPI.fetchMovies();

		this.setState({
			movies: movies
		});
	},

	renderMovieList: function () {
		var movies = this.state.movies.map(function (movie) {
			return <Movie key={movie.id} movie={movie} onDelete={this.deleteMovie.bind(this, movie.id)} />
		}, this);

		return (
			<ul className="row">
				{movies}
			</ul>
		);
	},

	renderNewMovieForm: function () {
		return <MovieForm />;
	},

	render: function () {
		// return this.renderMovieList();
		return this.renderNewMovieForm();
	}
});

module.exports = Movies;
