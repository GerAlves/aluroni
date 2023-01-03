import { Outlet } from 'react-router-dom';
import styles from './Header.module.scss';
import stylesTheme from 'styles/Theme.module.scss';

export default function Header(){
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
					XABLAU
				</div>
			</header>
			<div className={stylesTheme.container} >
				<Outlet />
			</div>
		</>
	);
}