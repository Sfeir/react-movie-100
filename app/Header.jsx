var React = require('react');

var Header = React.createClass({
	render: function () {
		return (
			<nav className="blue-grey darken-4">
				<div className="nav-wrapper">
					<a href="#" className="brand-logo center">ReactMovie</a>
				</div>
			</nav>
		);
	}
});

module.exports = Header;
