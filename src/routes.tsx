import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';
import About from 'pages/About';
import Course from 'pages/Course';
import Inicio from 'pages/Inicio';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return(
		<main className='container'>
			<Router>
				<Main />
				<Routes>
					<Route path='/' element={<Header />} >
						<Route index element={<Inicio />} />
						<Route path='menu' element={<Menu />} />
						<Route path='about' element={<About />} />
					</Route>
					<Route path='*' element={<NotFound />} />
					<Route path='prato/:id'	element={<Course />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}