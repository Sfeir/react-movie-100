var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./Header.jsx');

var Movies = require('./Movies.jsx');

var App = React.createClass({
	render: function () {
		return (
			<div>
				<Header/>
				<Movies/>
				<a className="new-movie-btn btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
			</div>
		);
	}
});

ReactDOM.render(
	<App/>, document.getElementById('app-container'));
