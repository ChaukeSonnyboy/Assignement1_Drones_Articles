import "./App.css";
import Subscribe from "./components/subscribe/Subscribe";
import Articles from "./components/articles/Articles";
import Footer from "./components/navigation/Footer";
import About from "./components/about/About";

function App() {
	return (
		<>
			{/* <Header /> */}
      <Articles />
      <About/>
      <Subscribe />
      <Footer/>
			{/* <Subscribe /> */}
			{/* <Articles/> */}

			{/* <Footer/> */}
			{/* <Hero />
      
      <About />

      <footer>

        <div className='socialMedia'> {/* Social Media Links Container  *
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={linkedinLogo} id='lnkdIn' alt="LinkedIn" />
          </a>
          <a href="https://www.pinterest.com/" target="_blank">
            <img src={pinterestLogo} alt="Pinterest" />
          </a>
        </div>

        <div className='bookmark'> {/* Bookmark Links Container  }

          <a href="#aboutus">ABOUT</a>
          <a href="#dronesArtcles">ARTICLES</a>
          <button type="button" onClick={jumpToSubscribe} >SUBSCRIBE</button>
        </div>


      </footer> */}
		</>
	);
}

export default App;
