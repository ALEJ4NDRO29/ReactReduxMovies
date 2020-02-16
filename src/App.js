import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/Routes';
import Header from './components/layout/Header';

class App extends Component {

	render() {
		return (
			// Cargar router
			<Router>
				<Header />
				{/* Componente para
				 	cargar las rutas de la aplicación */}
				<Routes />
			</Router>
		);
	}

}

export default App;
