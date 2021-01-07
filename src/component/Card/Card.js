import { useState } from "react";
import style from "./Card.module.css";

export default function Card({ name, ingridient, category, autor, mainImage }) {
	const [recipeCount, setRecipeCount] = useState(30);

	const imageHandelbars = () => {
		console.log(name);
	};
	return (
		<div className={style.wrapper}>
			<img
				className={style.img}
				src={mainImage}
				onClick={imageHandelbars}
			></img>
			<div className={style.listWrapper}>
				<span className={style.receptName}>{name}:</span>
				<ul className={style.list}>
					{ingridient.map(({ name, amount }) => (
						<li key={name} className={style.item}>
							<span className={style.itemName}>{name}</span>
							<span className={style.itemAmount}>{amount}гр</span>
						</li>
					))}
				</ul>
			</div>
			<div className={style.leftBlock}>
				<span className={style.leftBlockCategory}>{category}</span>
				<span className={style.leftBlockAutor}>{autor}</span>
			</div>
		</div>
	);
}
