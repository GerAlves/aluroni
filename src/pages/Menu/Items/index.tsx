import menu from 'data/menu.json';
import Item from './Item';
import styles from './Items.module.scss';
import { useState, useEffect } from 'react';

interface Props{
    search: string;
    filter: number | null;
    sorter: string;
}

export default function Items(props: Props){
	const [list, setList] = useState(menu);
	const {search, filter, sorter} = props;

	function searchTest(title: string){
		const regex = new RegExp(search, 'i');
		return regex.test(title);
	}

	function filterTest(id: number){
		if(filter !== null) return filter === id;
		return true;
	}

	function Sort(newList: typeof menu){
		switch(sorter){
		case 'Porção':
			return newList.sort((a, b) => a.size > b.size ? 1 : -1);
		case 'Qtd. pessoas':
			return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
		case 'Preço':
			return newList.sort((a, b) => a.price > b.price ? 1 : -1);
		default:
			return newList;
		}
	}

	useEffect(() => {
		const newList = menu.filter(item => searchTest(item.title) && filterTest(item.category.id));
		setList(Sort(newList));
	},[search, filter, sorter]);

	return(
		<div className={styles.itens}>
			{list.map((item) => (
				<Item 
					key={item.id} 
					title={item.title} 
					photo={item.photo} 
					description={item.description} 
					size={item.size}
					serving={item.serving}
					price={item.price}
					id={item.id}
					category={item.category}
				/> 
			))}
		</div>
       
	);
}