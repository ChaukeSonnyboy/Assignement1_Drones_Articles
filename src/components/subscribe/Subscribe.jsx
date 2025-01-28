import Styles from "./Subscribe.module.css";

const Subscribe = () => {
	return (
		<>
			<section className={Styles.subscribeSection} id="subscribe">
				<div className={Styles.formContainer}>
					<h2>SUBSCRIBE</h2>
					<p>Sign-up to our newsletter</p>

					<form action="">
						<input type="text" placeholder="Your email" /> <br />
						<button
							type="button"
							className={`${Styles.btn} ${Styles.secondaryBtn}`}
						>
							SUBMIT
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Subscribe;
