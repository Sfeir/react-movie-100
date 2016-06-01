var React = require('react');

var Movie = require('./Movie.jsx');

var MovieAPI = require('./MovieAPI.js');

var MovieForm = require('./MovieForm.jsx');

var Movies = React.createClass({
	getInitialState: function () {
		return {
			movies: [],
			creating: false
		}
	},

	componentDidMount: function () {
		var movies = MovieAPI.fetchMovies();

		this.setState({movies: movies});
	},

	deleteMovie: function (movieID) {
		var newMovieList = this.state.movies.filter(function (movie) {
			return movie.id !== movieID;
		});

		this.setState({movies: newMovieList});
	},

	showMovieForm: function () {
		this.setState({
			creating: true
		});
	},

	renderMovieList: function () {
		var movies = this.state.movies.map(function (movie) {
			return <Movie key={movie.id} movie={movie} onDelete={this.deleteMovie.bind(this, movie.id)}/>
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
		return <MovieForm/>;
	},

	render: function () {
		return this.state.creating ? this.renderNewMovieForm() : this.renderMovieList();
	}
});

module.exports = Movies;
