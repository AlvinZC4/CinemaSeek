import React, { useState, useEffect } from "react";
import { Container, Row, Col } from '../componets/Grid';
import Header from '../componets/Header';
import SearchForm from '../componets/SearchForm';
import API from '../utils/API';

function Main() {
	const [search, setSearch] = useState({
		search: ''
	});

	const [searchResults, setSearchResults] = useState([]);


	const findMovie = () => {
		API.findMovies(search.search)
			.then(res => {
				const ApiResults = res.data.results;
				console.log('API Results', ApiResults);

				const movieResults = ApiResults.map(movie => {
					return {
						id: movie.id,
						title: movie.title,
						release_date: movie.release_date,
						synopsis: movie.overview,
						poster: 'https://image.tmdb.org/t/p/w154' + movie.poster_path
					}
				})
				console.log('movie results', movieResults);
				setSearchResults(movieResults);
			}).catch(err => {
				console.log(err);
			});
	}

	const handleInputChange = function (event) {
		const name = event.target.name;
		const value = event.target.value;

		setSearch({
			[name]: value
		});
	}

	const handleSubmit = function (event) {
		event.preventDefault();
		findMovie();
	}
		
	return (
		<div>
			<Container>
				<Row classes="d-flex justify-content-center mb-3">
					<Col size="xs-12 sm-10 md-8 lg-6">
						<Header text="Search for a movie by title"/>
						<SearchForm
							label="Search for a movie!"
							placeHolder="Enter movie title here"
							id="serch"
							handleInputChange={handleInputChange}
							handleFormSubmit={handleSubmit}
							value={search.search}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	)
	
};

export default Main;