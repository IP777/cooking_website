import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
	id,
	name,
	ingridient,
	category,
	autor,
	mainImage,
}) {
	return (
		<div className={style.wrapper}>
			<Link to={{ pathname: "/recipe", search: `?id=${id}` }}>
				<img className={style.img} src={mainImage} alt="img" />
			</Link>
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