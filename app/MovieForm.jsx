var React = require('react');

var MovieForm = React.createClass({
	getDefaultProps: function () {
		return {
			onSave: function () {}
		};
	},

	onSave: function (event) {
		event.preventDefault();

		this.props.onSave({
			title: this.refs.title.value,
			category: this.refs.category.value,
			synopsis: this.refs.synopsis.value
		});
	},

	render: function () {
		return (
			<div className="row movie-form">
				<form className="col s12 card-panel" onSubmit={this.onSave}>
					<div className="row center-align">
						<h5>Créer un nouveau film</h5>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input ref="title" placeholder="Titre du film" type="text" className="validate"/>
							<label className="active">Titre</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							{/* on pourrait utiliser un select */}
							<input ref="category" placeholder="Categorie du film" type="text" className="validate"/>
							<label for="last_name" className="active">Categorie</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<textarea ref="synopsis" className="materialize-textarea"></textarea>
							<label className="active">Synopsis</label>
						</div>
					</div>

					<div className="row right-align">
						<div className="col s12">
							<button className="btn waves-effect waves-light" type="submit" name="action">Sauvegarder
								<i className="material-icons right">send</i>
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = MovieForm;
