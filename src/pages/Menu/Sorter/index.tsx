import styles from './Sorter.module.scss';
import options from './options.json';
import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props{
    sorter: string;
    setSorter: React.Dispatch<React.SetStateAction<string>>
}

export default function Sorter({sorter, setSorter} : Props) {
	const [open, setOpen] = useState(false);
	return(
		<button className={`${styles.ordenador} ${sorter !== '' ? styles['ordenador--ativo'] : ''}`} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>          
			<span>Ordenar Por</span>
			{open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
			<div className={`${styles.ordenador__options} ${open === true ? styles['ordenador__options--ativo'] : ''}`} >
				{options.map((option) => (
					<div className={styles.ordenador__option} key={option.value} onClick={() => setSorter(option.nome)}>
						{option.nome}
					</div>    
				))}
                
			</div>
		</button>
	);
}