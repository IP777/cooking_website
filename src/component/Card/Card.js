import { useState } from "react";
import style from "./Card.module.css";

export default function Card({ name, ingridient }) {
	const [recipeCount, setRecipeCount] = useState(30);
	return (
		<div className={style.wrapper}>
			<img
				className={style.img}
				src="https://img-global.cpcdn.com/recipes/ce63309364b75ee0/751x532cq70/salat-iz-piekinskoi-kapusty-s-kuritsiei-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.webp"
			></img>
			<div className={style.listWrapper}>
				<span className={style.receptName}>{name}:</span>
				<ul className={style.list}>
					{ingridient.map(({ name, amount }) => (
						<li className={style.item}>
							<span className={style.itemName}>{name}</span>
							<span className={style.itemAmount}>{amount}гр</span>
						</li>
					))}
				</ul>
			</div>
			<div className={style.leftBlock}>
				<span>Category</span> <span>Autor</span>
			</div>
		</div>
	);
}
