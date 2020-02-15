import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/Routes';
import Header from './components/layout/Header';

class App extends Component {

	render() {
		return (
			<Router>
				<Header />
				<Routes />
			</Router>
		);
	}

}

export default App;
