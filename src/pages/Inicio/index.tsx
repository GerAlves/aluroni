import menu from 'data/menu.json';
import styles from './Inicio.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export default function Inicio(){
	let recommendedCourses = [...menu];
	recommendedCourses = recommendedCourses.sort(() => 0.5 - Math.random()).splice(0,3);
	const navigate = useNavigate();

	function redirectSeeMore(prato: typeof menu[0]){
		navigate(`/prato/${prato.id}`, { state: { prato }});
	}

	return(
		<section>
			<h3 className={stylesTheme.titulo}>
                Recomendações da Cozinha
			</h3>
			<div className={styles.recomendados}>
				{recommendedCourses.map((item => 
					<div key={item.id} className={styles.recomnendado}>
						<div>
							<img src={item.photo} alt={item.title} />  
						</div>
						<button 
							className={styles.recomendado__botao}
							onClick={() => redirectSeeMore(item)}
						>
                            Ver mais
						</button>    
					</div>
				))}
			</div>
			<h3 className={stylesTheme.titulo}> Nossa casa </h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} alt='Casa do Aluroni' />
				<div className={styles.nossaCasa__endereco}>
					Rua Vergueiro, 31485 <br /> <br/> Vila Mariana - SP
				</div>
			</div>
		</section>
	);
}