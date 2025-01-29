import Styles from "./Navigation.module.css";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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
							<a href="#aboutus " onClick={toggleMenu}>
								ABOUT
							</a>
						</li>

						<li>
							<a href="#articles" onClick={toggleMenu}>
								ARTICLE
							</a>
						</li>
						<li>
							<a href="#subscribe" onClick={toggleMenu}>
								SUBSCRIBE
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
			<header
				className={`${Styles.mainHeader} ${isScrolled ? Styles.scrolled : ""}`}
			>
				<div className={Styles.logo}>
					<a href="#" onClick={() => setIsOpen(false)}>
						DRONOTICZ
					</a>
				</div>

				<div className={Styles.navbarContainer}>
					<nav>
						<ul className={Styles.navLinks}>
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
					<a href="#subscribe">
						<button className={Styles.btn}>SUBSCRIBE</button>
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
