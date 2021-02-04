import style from "./RecipeTable.module.css";

export default function RecipeTable({ ingridients }) {
	return (
		<table className={style.table}>
			<caption>Продукты :</caption>
			<tbody>
				{ingridients.map(({ ingridient, count }, index) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{ingridient}</td>
						<td>{count}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
