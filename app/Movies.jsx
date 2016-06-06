'use strict';

var React = require('react');

var Movies = React.createClass({
	render: function () {
		return (
			<div>
				<ul className="row">
					<li className="movie col s3">
						<div className="movie__card card medium hoverable">
							<div className="card-image">
								<img src="img/rick_morty.jpg" />
								<span className="card-title">Rick and Morty</span>
							</div>

							<div className="card-content">
								<div className="movie__card__category chip">
									Adventure
								</div>

								<p className="movie__card__synopsis truncate">
									An animated series that follows the exploits of a super scientist and his not so bright grandson.
								</p>
							</div>

							<div className="card-action right-align">
								<a href="#">
									<i className="material-icons">delete</i>
								</a>
							</div>
						</div>
					</li>
					<li className="movie col s3">
						<div className="movie__card card medium hoverable">
							<div className="card-image">
								<img src="img/silicon_valley.jpg" />
								<span className="card-title">Silicon Valley</span>
							</div>

							<div className="card-content">
								<div className="movie__card__category chip">
									Comedy
								</div>

								<p className="movie__card__synopsis truncate">
									In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. A comedy partially inspired by Mike Judge's own experiences as a Silicon Valley engineer in the late 1980s
								</p>
							</div>

							<div className="card-action right-align">
								<a href="#">
									<i className="material-icons">delete</i>
								</a>
							</div>
						</div>
					</li>
					<li className="movie col s3">
						<div className="movie__card card medium hoverable">
							<div className="card-image">
								<img src="img/kung_fury.jpg" />
								<span className="card-title">Kung Fury</span>
							</div>

							<div className="card-content">
								<div className="movie__card__category chip">
									Action
								</div>

								<p className="movie__card__synopsis truncate">
									In 1985, Kung Fury, the toughest martial artist cop in Miami, goes back in time to kill the worst criminal of all time - kung fuhrer Hitler.
								</p>
							</div>

							<div className="card-action right-align">
								<a href="#">
									<i className="material-icons">delete</i>
								</a>
							</div>
						</div>
					</li>
					<li className="movie col s3">
						<div className="movie__card card medium hoverable">
							<div className="card-image">
								<img src="img/scott_pilgrim.jpg" />
								<span className="card-title">Scott Pilgrim</span>
							</div>

							<div className="card-content">
								<div className="movie__card__category chip">
									Comedy
								</div>

								<p className="movie__card__synopsis truncate">
									Scott Pilgrim must defeat his new girlfriend's seven evil exes in order to win her heart.
								</p>
							</div>

							<div className="card-action right-align">
								<a href="#">
									<i className="material-icons">delete</i>
								</a>
							</div>
						</div>
					</li>
				</ul>
				<a className="new-movie-btn btn-floating btn-large waves-effect waves-light red">
					<i className="material-icons">add</i>
				</a>
			</div>
		);
	}
});

module.exports = Movies;
