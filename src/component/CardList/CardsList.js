import Card from "./Card/Card";
import style from "./CardList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slideTransition from "../../assets/transition/slide.module.css";
import { Link } from "react-router-dom";

export default function CardsList({ database }) {
	// console.log(database);
	return (
		<TransitionGroup component="ul" className={style.list}>
			{database.map(
				({
					_id,
					recipe_name,
					ingredients,
					category,
					autor,
					main_image_src,
					description,
				}) => (
					<CSSTransition
						key={_id}
						timeout={250}
						classNames={slideTransition}
						unmountOnExit
					>
						<li key={_id}>
							<Link
								to={{
									pathname: "/recipe",
									search: `?id=${_id}`,
								}}
								className={style.link}
							>
								<Card
									id={_id}
									name={recipe_name}
									ingridient={ingredients}
									category={category}
									autor={autor}
									mainImage={main_image_src}
									description={description}
								/>
							</Link>
						</li>
					</CSSTransition>
				)
			)}
		</TransitionGroup>
	);
}
