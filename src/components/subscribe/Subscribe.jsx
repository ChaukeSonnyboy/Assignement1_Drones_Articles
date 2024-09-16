import Styles from "./Subscribe.module.css";

const Subscribe = () => {
	return (
		<>
			<section className={Styles.subscribeSection}>
				<div className={Styles.formContainer}>
					<form action="">
						<div>
							<h2>SUBSCRIBE</h2>
							<p>Sign-up to our newsletter</p>
							<input type="text" placeholder="Your email" /> <br />
							<button type="button" className="button">
								SUBMIT
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Subscribe;
