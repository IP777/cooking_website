import style from "./RecipeTable.module.css";

export default function RecipeTable({ ingridients }) {
	return (
		<table className={style.table}>
			<caption>Продукты :</caption>
			<tbody>
				{ingridients.map(({ ingridient, count }, index) => (
					<tr className={style.tr} key={index}>
						<td className={style.td}>{index + 1}</td>
						<td className={style.td}>{ingridient}</td>
						<td className={style.td}>{count}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
