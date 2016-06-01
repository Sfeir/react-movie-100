var React = require('react');

var Movie = require('./Movie.jsx');

var MovieAPI = require('./MovieAPI.js');

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

	render: function () {
		var movies = this.state.movies.map(function (movie) {
			return <Movie key={movie.id} movie={movie} onDelete={this.deleteMovie.bind(this, movie.id)} />
		}, this);

		return (
			<ul className="row">
				{movies}
			</ul>
		);
	}
});

module.exports = Movies;
