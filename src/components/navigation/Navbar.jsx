import Styles from "./Navigation.module.css";

const Navbar = () => {
	return (
		// Footer navigation menu
		<div className={Styles.navbarContainer}>
			<nav>
				<ul className={Styles.navLinks}>
					<li>
						<a href="#aboutus">ABOUT</a>
					</li>

					<li>
						<a href="#articles">ARTICLE</a>
					</li>
					<li>
						<a className={`${Styles.btn} ${Styles.primaryBtn}`}>SUBSCRIBE</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
