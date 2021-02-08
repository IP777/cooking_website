import { NavLink } from "react-router-dom";
import style from "./HeadNavMenu.module.css";

import { connect } from "react-redux";
import { isLoggedInSelector } from "../../../redux/reducer/session";

function HeadNavMenu({ isLoaded }) {
	return (
		<ul className={style.link_wrapper}>
			<li>
				<NavLink
					exact
					to="/"
					className={style.selected_link}
					activeClassName={style.selected_link_in}
				>
					Главная
				</NavLink>
			</li>
			{isLoaded && (
				<li>
					<NavLink
						to="/myrecipe"
						className={style.selected_link}
						activeClassName={style.selected_link_in}
					>
						Мои рецепты
					</NavLink>
				</li>
			)}
		</ul>
	);
}

const mapStateToProps = (state) => ({
	isLoaded: isLoggedInSelector(state),
});

export default connect(mapStateToProps)(HeadNavMenu);
