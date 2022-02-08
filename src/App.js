import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from "./componets/Wrapper";
import Main from './pages/main';

function App() {
	return (
		<div>
			<Router>
				<Wrapper>
					<Routes>
						<Route path="/" element={<Main/>} />
					</Routes>
				</Wrapper>
			</Router>
		</div>
	);
}

export default App;
