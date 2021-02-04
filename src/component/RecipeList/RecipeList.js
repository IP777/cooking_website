import style from "./RecipeList.module.css";

export default function RecipeList({ list }) {
	return (
		<div className={style.recipe}>
			<h5>Пошаговое приготовление</h5>
			<ul>
				{list.map(({ imageUrl, stepText }, index) => (
					<li className={style.li} key={index}>
						{imageUrl && (
							<img
								className={style.img}
								src={imageUrl}
								alt="img"
							/>
						)}
						<p>
							{index + 1}. {stepText}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
