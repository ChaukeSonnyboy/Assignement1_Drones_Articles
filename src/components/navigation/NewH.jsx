import { useState, useEffect } from "react";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={isScrolled ? "scrolled" : ""}>
			<ul>
				<li>
					<a href="/">DRONOTICZ</a>
				</li>

				<li>
					<ul className="inner-nav">
						<li>
							<a href="#about">ABOUT</a>
						</li>
						<li>
							<a href="#articles">ARTICLES</a>
						</li>
					</ul>
				</li>

				<li className="btn primary-btn">
					<a href="#subscribe">SUBSCRIBE</a>
				</li>
			</ul>

			
		</nav>
	);
};

export default Header;
