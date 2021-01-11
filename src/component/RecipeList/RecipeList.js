import style from "./RecipeList.module.css";

export default function RecipeList({ list }) {
	return (
		<div className={style.recipe}>
			<h5>Пошаговое приготовление</h5>
			<ul>
				{list.map(({ image_path, step_text }, index) => (
					<li className={style.li} key={index}>
						{image_path && (
							<img
								className={style.img}
								src={image_path}
								alt="img"
							/>
						)}
						<p>
							{index + 1}. {step_text}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
