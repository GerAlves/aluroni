import styles from './Course.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import menu from 'data/menu.json';
import Header from 'components/Header';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';

export default function Course() {
	const { id } = useParams();
	const  prato  = menu.find(item => item.id === Number(id));
	const navigate = useNavigate();

	if(!prato) {
		return <NotFound />;
	}

	return(
		<>
			<Header />
			<button 
				className={styles.voltar}
				onClick={() => navigate(-1)}
			>
				{'< Voltar'}
			</button>
			<section className={styles.container}>
				<h1 className={styles.titulo}>
					{prato.title}
				</h1>
				<div className={styles.imagem}>
					<img src={prato.photo} alt={prato.title} />
				</div>
				<div className={styles.conteudo} >
					<p className={styles.conteudo__descricao} >
						{prato.description}
					</p>
					<TagsPrato {...prato}/>
				</div>
			</section>
		</>
	);
}