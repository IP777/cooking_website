import Card from "./Card/Card";
import style from "./CardList.module.css";

export default function CardsList({ database }) {
	return (
		<ul className={style.list}>
			{database.map(
				({
					_id,
					recipe_name,
					ingredients,
					category,
					autor,
					main_image,
				}) => (
					<li key={_id}>
						<Card
							key={_id}
							id={_id}
							name={recipe_name}
							ingridient={ingredients}
							category={category}
							autor={autor}
							mainImage={main_image}
						/>
					</li>
				)
			)}
		</ul>
	);
}
