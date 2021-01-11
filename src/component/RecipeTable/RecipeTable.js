import style from "./RecipeTable.module.css";

export default function RecipeTable({ ingridients }) {
	return (
		<table className={style.table}>
			<caption>Продукты :</caption>
			<tbody>
				{ingridients.map(({ name, amount }) => (
					<tr key={name}>
						<td>1</td>
						<td>{name}</td>
						<td>{amount} гр</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
