import styles from './Item.module.scss';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';

interface Props{
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    id: number;
    category: {
        id: number;
        label: string;
    }
}

export default function Item(props : Props){
	const navigate = useNavigate();
	return(
		<div className={styles.item} onClick={() => navigate(`/prato/${props.id}`)}>
			<div className={styles.item__imagem} >
				<img src={props.photo} alt={props.title}/>
			</div>
			<div className={styles.item__descricao} >
				<div className={styles.item__titulo} >
					<h2> {props.title} </h2>
					<p> {props.description} </p>
				</div>  
				<TagsPrato {...props} />    
			</div>    
		</div>
	);
}