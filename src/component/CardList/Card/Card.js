import MainIngridientTable from "./MainIngridientTable/MainIngridientTable";
import style from "./Card.module.css";

export default function Card({
	id,
	name,
	ingridient,
	category,
	autor,
	mainImage,
	description,
}) {
	return (
		<div className={style.wrapper}>
			<div
				style={{ backgroundImage: `url(${mainImage})` }}
				className={style.imgDiv}
			/>
			<div className={style.textWrapper}>
				<span className={style.receptName}>{name}:</span>
				{/* <div> */}
				<p className={style.description}>{description}</p>
				{/* <MainIngridientTable ingridient={ingridient} /> */}
				{/* </div> */}
				<span className={style.readNext}>Читать далее ....</span>
			</div>
			<div className={style.leftBlock}>
				<span className={style.leftBlockCategory}>{category}</span>
				<span className={style.leftBlockAutor}>{autor}</span>
			</div>
		</div>
	);
}
