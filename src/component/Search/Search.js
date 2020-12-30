import style from "./Search.module.css";
import { NavLink, Link } from "react-router-dom";
import { Chip, Icon } from "react-materialize";

export default function Search() {
	return (
		<form className={style.wrapper}>
			<Chip
				close={false}
				closeIcon={<Icon className="close">close</Icon>}
				options={{
					autocompleteOptions: {
						data: {
							Apple: null,
							Google: null,
							Microsoft: null,
						},
						limit: Infinity,
						minLength: 1,
						onAutocomplete: function noRefCheck() {},
					},
				}}
				className={style.textline}
			/>
			<Icon className={style.serch_btn + " search"}>search</Icon>
		</form>
	);
}
