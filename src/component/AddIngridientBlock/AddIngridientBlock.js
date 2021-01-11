import { useState } from "react";
import throttle from "lodash.throttle";
import { Button, Icon } from "react-materialize";
import style from "./AddIngridientBlock.module.css";

export default function AddIngridientBlock() {
	const [ingidients, setIngidients] = useState([
		{ id: 0, ingridient: "", count: 0, add: false },
		{ id: 1, ingridient: "", count: 0, add: false },
		{ id: 2, ingridient: "", count: 0, add: true },
	]);

	const handelbarAdd = () => {
		const modIngridients = ingidients.map((iter) => ({
			...iter,
			add: false,
		}));

		setIngidients([
			...modIngridients,
			{
				id: modIngridients.length,
				ingridient: "",
				count: 0,
				add: true,
			},
		]);
	};

	const handelbarRemove = (e) => {
		const getId = Number(e.target.parentElement.parentElement.id);
		const filterArr = ingidients.filter((iter) => iter.id !== getId);
		setIngidients(filterArr);
	};

	const handelbarChangeIngridient = (e) => {
		const getId = Number(e.target.parentElement.id);
		const getValue = e.target.value;
		const getType = e.target.type;

		const modIngridients = ingidients.map((iter) => {
			if (iter.id === getId) {
				if (getType === "text") {
					return { ...iter, ingridient: getValue };
				}
				return { ...iter, count: getValue };
			} else {
				return iter;
			}
		});

		setIngidients(modIngridients);
	};

	return (
		<div className={style.ingidientWrapper}>
			{ingidients.map(({ add, id, ingridient, count }, index) => (
				<div id={id} key={index} className={style.ingridientBlock}>
					<input
						type="text"
						placeholder="Ингридиент"
						onChange={handelbarChangeIngridient}
						value={ingridient}
					/>
					<input
						type="number"
						placeholder="Кол.."
						onChange={handelbarChangeIngridient}
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
