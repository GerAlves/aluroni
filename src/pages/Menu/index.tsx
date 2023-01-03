import styles from './Menu.module.scss';
import Searcher from './Searcher';
import { useState } from 'react';
import Filters from './Filters';
import Sorter from './Sorter';
import Items from './Items';
import stylesTheme from 'styles/Theme.module.scss';

export default function Menu(){
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<number | null>(null);
	const [sorter, setSorter] = useState('');
	return(
		<section className={styles.cardapio}>
			<h3 className={stylesTheme.titulo}>Cardápio</h3>
			<Searcher search={search} setSearch={setSearch} />
			<div className={styles.cardapio__filtros} >
				<Filters filter={filter} setFilter={setFilter} />
				<Sorter sorter={sorter} setSorter={setSorter} />
			</div>
			<Items search={search} filter={filter} sorter={sorter}/>
		</section>
	);
}