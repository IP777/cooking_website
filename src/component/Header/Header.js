import { NavLink, Link } from "react-router-dom";
import style from "./Header.module.css";
import HeaderLoginMenu from "../../containers/HeadLoginMenu";

import { connect } from "react-redux";
import { isLoggedInSelector } from "../../redux/reducer/session";

function Header({ isLoaded }) {
	return (
		<nav>
			<div className="nav-wrapper grey lighten-5">
				<Link to="/" className={style.brand_logo}>
					Cooking
				</Link>
				<HeaderLoginMenu />
				<ul
					id="nav-mobile"
					className={
						style.link_wrapper + " right hide-on-med-and-down"
					}
				>
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
			</div>
		</nav>
	);
}

const mapStateToProps = (state) => ({
	isLoaded: isLoggedInSelector(state),
});

export default connect(mapStateToProps)(Header);
