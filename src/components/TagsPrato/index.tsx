import styles from './TagsPrato.module.scss';
import classNames from 'classnames';

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

export default function TagsPrato(props: Props) {
	return (
		<div className={styles.tags}>
			<div className={classNames({
				[styles.tags__tipo]: true,
				[styles[`tags__tipo__${props.category.label.toLowerCase()}`]]: true
			})}>
				{props.category.label}
			</div>
			<div className={styles.tags__porcao}>
				{props.size}g
			</div>
			<div className={styles.tags__qtdpessoas}>
				Serve {props.serving} pessoa{props.serving === 1 ? '' : 's'}
			</div>
			<div className={styles.tags__valor}>
				R$ {props.price.toFixed(2)}
			</div>
		</div> 
	);
}