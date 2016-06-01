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
			</div>
		);
	}
});

ReactDOM.render(
	<App/>, document.getElementById('app-container'));
