import Styles from "./Navigation.module.css";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import { useState } from "react";
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// Menu to be shown in smaller devices when the menu button is clicked
	const collapsedMenu = (
		<>
			<div className={Styles.collapsedContainer}>
				<IoCloseSharp className={Styles.closeMenu} onClick={toggleMenu} />

				<nav>
					<ul className={Styles.collapsedNavLinks}>
						<li>
							<a href="#aboutus">ABOUT</a>
						</li>

						<li>
							<a href="#articles">ARTICLE</a>
						</li>
						<li>
							<a className="btn" href="#subscribe">
								<button>SUBSCRIBE</button>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);

	return (
		<>
			{/* Default menu to be shown on the header in desktop/laptops */}
			<header className={Styles.mainHeader}>
				<div>
					<a href="#">
						{" "}
						<h2>
							D<span className={Styles.logo}>Z</span>
						</h2>
					</a>
				</div>

				<div className={Styles.headerNavbarContainer}>
					<nav>
						<ul className={Styles.headerNavLinks}>
							<li>
								<a href="#aboutus">ABOUT</a>
							</li>

							<li>
								<a href="#articles">ARTICLE</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className={Styles.headerButton}>
					<a className="btn" href="#subscribe">
						<button>SUBSCRIBE</button>
					</a>
				</div>

				{/* Header in smaller devices, it will only be visible in smaller devices*/}

				<div className={Styles.collapsedNav}>
					{isOpen ? (
						collapsedMenu
					) : (
						<FaBars className={Styles.openMenu} onClick={toggleMenu} />
					)}
				</div>
			</header>
		</>
	);
};

export default Header;
