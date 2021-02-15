import style from "./MainIngridientTable.module.css";

export default function MainIngridientTable({ ingridient }) {
	return (
		<table className={style.table}>
			<tbody className={style.list}>
				{ingridient.map(({ ingridient, count }, index) => {
					if (index > 3) {
						return false;
					}
					return (
						<tr key={index} className={style.item}>
							<td className={style.itemName}>{ingridient}</td>
							<td className={style.itemAmount}>{count}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
