import {ReactComponent as Logo} from 'assets/logo.svg';
import styles from './Main.module.scss';
import { Link } from 'react-router-dom';

export default function Main() {
	const rotas = [{
		label: 'Início',
		to: '/'
	}, {
		label: 'Cardápio',
		to: '/menu' 
	}, {
		label: 'Sobre',
		to: '/about'
	}];
	return(
		<nav className={styles.menu}>
			<Logo />
			<ul className={styles.menu__list}>
				{rotas.map((rota, index) => (
					<li key={index} className={styles.menu__link} >
						<Link to={rota.to} >
							{rota.label}
						</Link>
					</li>
				))}
			</ul>
		</nav> 
	);
}