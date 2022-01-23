import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = process.env.REACT_APP_API_KEY;

const URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '?api_key=' + process.env.REACT_APP_API_KEY;

const API =  {
	findMovies: function (search) {
		return axios.get(URL + API_KEY + '&query=' + search);
	}
}

export default API;