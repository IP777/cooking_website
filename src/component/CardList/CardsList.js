import Card from "./Card/Card";
import style from "./CardList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slideTransition from "../../assets/transition/slide.module.css";

export default function CardsList({ database }) {
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
				}) => (
					<CSSTransition
						key={_id}
						timeout={250}
						classNames={slideTransition}
						unmountOnExit
					>
						<li key={_id}>
							<Card
								id={_id}
								name={recipe_name}
								ingridient={ingredients}
								category={category}
								autor={autor}
								mainImage={main_image_src}
							/>
						</li>
					</CSSTransition>
				)
			)}
		</TransitionGroup>
	);
}
// export default function CardsList({ database }) {
// 	return (
// 		<ul className={style.list}>
// 			{database.map(
// 				({
// 					_id,
// 					recipe_name,
// 					ingredients,
// 					category,
// 					autor,
// 					main_image_src,
// 				}) => (
// 					<li key={_id}>
// 						<Card
// 							id={_id}
// 							name={recipe_name}
// 							ingridient={ingredients}
// 							category={category}
// 							autor={autor}
// 							mainImage={main_image_src}
// 						/>
// 					</li>
// 				)
// 			)}
// 		</ul>
// 	);
// }

// const Contacts = ({ contacts, onRemoveContact }) => {
// 	return (
// 		<TransitionGroup component="ul" className={style.list}>
// 			{contacts.map(({ id, name, number }) => (
// 				<CSSTransition
// 					key={id}
// 					timeout={250}
// 					classNames={slideTransition}
// 					unmountOnExit
// 				>
// 					<li className={style.cardWrapper}>
// 						{name}
// 						<span>{number}</span>
// 						<button
// 							onClick={() => onRemoveContact(id)}
// 							className={style.cardBtn}
// 						>
// 							&#10006;
// 						</button>
// 					</li>
// 				</CSSTransition>
// 			))}
// 		</TransitionGroup>
// 	);
// };
