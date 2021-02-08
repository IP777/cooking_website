import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import style from "./Header.module.css";
import HeaderLoginMenu from "../../containers/HeadLoginMenu";
import HeadNavMenu from "../../component/Header/HeadNavMenu/HeadNavMenu";

export default function Header() {
	const isLaptop = useMediaQuery({
		query: "(min-device-width: 650px)",
	});

	return (
		<div className={style.header_wrapper}>
			<div className={style.head}>
				<Link to="/" className={style.brand_logo}>
					Cooking
				</Link>
				{isLaptop && <HeadNavMenu />}
				<HeaderLoginMenu />
			</div>
			{!isLaptop && <HeadNavMenu />}
		</div>
	);
}
