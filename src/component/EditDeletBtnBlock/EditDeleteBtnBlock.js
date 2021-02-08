import style from "./EditDeleteBtnBlock.module.css";
import { Button, Icon } from "react-materialize";

export default function EditDeleteBtnBlock({
	editHandelbar,
	deleteHandelbar,
	className,
}) {
	return (
		<>
			<Button
				className={
					className
						? `${style.btnCustom} ${className} red`
						: `${style.btnCustom} red`
				}
				floating
				icon={<Icon>edit</Icon>}
				large
				node="button"
				waves="light"
				onClick={editHandelbar}
			/>
			<Button
				className={
					className
						? `${style.btnCustom} ${className} red`
						: `${style.btnCustom} red`
				}
				floating
				icon={<Icon>delete</Icon>}
				large
				node="button"
				waves="light"
				onClick={deleteHandelbar}
			/>
		</>
	);
}
