var React = require('react');

var Movie = React.createClass({
	render: function () {
		var movie = this.props.movie,
			poster = movie.poster || 'no-poster.jpg',
			onDelete = this.props.onDelete;

		return (
			<li className="movie col s3">
				<div className="movie__card card medium hoverable">
					<div className="card-image">
						<img src={poster}/>
						<span className="card-title">{movie.title}</span>
					</div>

					<div className="card-content">
						<div className="movie__card__category chip">
							{movie.category}
						</div>

						<p className="movie__card__synopsis truncate">
							{movie.synopsis}
						</p>
					</div>

					<div className="card-action right-align">
						{/* utiliser button au lieu de a */}
						<a href="#" onClick={onDelete}>
							<i className="material-icons">delete</i>
						</a>
					</div>
				</div>
			</li>
		);
	}
});

module.exports = Movie;