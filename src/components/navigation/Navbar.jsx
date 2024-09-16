import Styles from "./Navigation.module.css";

const Navbar = () => {
	return (
		<div className={Styles.navbarContainer}>
			<nav className={Styles.navContainer}>
				<ul className={Styles.navLinks}>
					<li>
						<a href="">ABOUT</a>
					</li>

					<li>
						<a href="">ARTICLE</a>
					</li>
					<li>
						<a className="btn" href="">
							<button>SUBSCRIBE</button>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
