import './App.css'
import Hero from './Hero'
import Articles from './Articles'
import About from './About'
import Subscribe from './Subscribe'
import facebookLogo from './images/facebook.png'
import linkedinLogo from './images/linkedin.png'
import pinterestLogo from './images/Pinterest.jpg'
import { jumpToSubscribe } from './SubscribeRef'



function App() {
  return (
    <>
      <Hero />
      <Articles />
      <About />
      <Subscribe />

      <footer>

        <div className='socialMedia'>
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

        <div className='bookmark'>

          <a href="#aboutus">ABOUT</a>
          <a href="#dronesArtcles">ARTICLES</a>
          <button type="button" onClick={jumpToSubscribe} >SUBSCRIBE</button>
        </div>


      </footer>
    </>
  )
}

export default App;