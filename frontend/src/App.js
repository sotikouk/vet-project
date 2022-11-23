import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Users from './pages/users';
import Pets from './pages/pets';

function App() {


return (
  <div>
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/users' element={<Users />} />
		<Route path='/pets' element={<Pets />} />
	</Routes>
	</Router>
  </div>

);
}

export default App;
