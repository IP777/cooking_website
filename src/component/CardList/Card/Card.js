import style from "./Card.module.css";

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
			<img className={style.img} src={mainImage} alt="img" />
			<div className={style.listWrapper}>
				<span className={style.receptName}>{name}:</span>
				<ul className={style.list}>
					{ingridient.map(({ ingridient, count }, index) => {
						if (index > 3) {
							return false;
						}
						return (
							<li key={index} className={style.item}>
								<span className={style.itemName}>
									{ingridient}
								</span>
								<span className={style.itemAmount}>
									{count}
								</span>
							</li>
						);
					})}
				</ul>
			</div>
			<div className={style.leftBlock}>
				<span className={style.leftBlockCategory}>{category}</span>
				<span className={style.leftBlockAutor}>{autor}</span>
			</div>
		</div>
	);
}
