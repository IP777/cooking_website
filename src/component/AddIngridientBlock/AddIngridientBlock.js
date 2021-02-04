import { useEffect, useState } from "react";
import shortid from "shortid";
import { Button, Icon } from "react-materialize";
import style from "./AddIngridientBlock.module.css";

export default function AddIngridientBlock({
	getRecipeIngredients,
	defaultValue,
}) {
	const [ingidients, setIngidients] = useState([
		{ id: "0", ingridient: "", count: "", add: false },
		{ id: "1", ingridient: "", count: "", add: false },
		{ id: "2", ingridient: "", count: "", add: true },
	]);

	useEffect(() => {
		if (defaultValue.length > 0) {
			setIngidients(defaultValue);
		}
	}, [getRecipeIngredients, defaultValue]);

	const handelbarAdd = () => {
		const modIngridients = ingidients.map((iter) => ({
			...iter,
			add: false,
		}));

		setIngidients([
			...modIngridients,
			{
				id: shortid.generate(),
				ingridient: "",
				count: 0,
				add: true,
			},
		]);
	};

	const handelbarRemove = (e) => {
		const getId = e.target.parentElement.parentElement.id;
		const filterArr = ingidients.filter((iter) => iter.id !== getId);

		setIngidients(filterArr);
		getRecipeIngredients(filterArr);
	};

	const handelbarChange = (e) => {
		const getId = e.target.parentElement.id;

		const modIngridientArr = ingidients.map((ingridient) =>
			getId === ingridient.id
				? { ...ingridient, [e.target.name]: e.target.value }
				: ingridient
		);

		setIngidients(modIngridientArr);
		getRecipeIngredients(modIngridientArr);
	};

	return (
		<div className={style.ingidientWrapper}>
			{ingidients.map(({ add, id, ingridient, count }, index) => (
				<div id={id} key={index} className={style.ingridientBlock}>
					<input
						name="ingridient"
						type="text"
						placeholder="Ингридиент"
						onChange={handelbarChange}
						value={ingridient}
					/>
					<input
						name="count"
						type="text"
						placeholder="Кол.."
						onChange={handelbarChange}
						value={count}
					/>
					{add ? (
						<Button
							className={style.addButton + " red"}
							floating
							icon={<Icon>add</Icon>}
							large
							node="button"
							waves="light"
							onClick={handelbarAdd}
						/>
					) : (
						<Button
							className={style.addButton + " red"}
							floating
							icon={<Icon>delete</Icon>}
							large
							node="button"
							waves="light"
							onClick={handelbarRemove}
						/>
					)}
				</div>
			))}
		</div>
	);
}
