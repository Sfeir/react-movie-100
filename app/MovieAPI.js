var axios = require('axios');

function fetchMovies() {
	return axios.get('/server/api/movies')
		.then(function (response) {
			return response.data;
		});
}

module.exports = {
	fetchMovies: fetchMovies
};
