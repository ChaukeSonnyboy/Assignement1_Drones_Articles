import drone1 from './assets/images/surveillance.png'
import drone2 from './assets/images/robotics.png'
import drone3 from './assets/images/prosthetics.png'
import drone4 from './assets/images/agriculture.png'

function Articles() {
    return (
        <>

            <section className="articles" id='dronesArtcles'>

                <div className="artContainer"> {/* Container of the article header and articles containers */}

                    <div id="artHeader"> {/* Container of the articles Header */}
                        <p>LATEST ARTICLES</p>
                        <hr />
                    </div>

                    <div className="latestArticles"> {/* Container of the articles */}

                        <div className="droneArt"> {/* Article Card */}
                            <img src={drone1} alt="drone1" />   {/* Article Image */}
                            <hr />
                            <div className="desc">How to automate surveillance drones</div> {/* Article Description/Topic */}
                        </div>

                        <div className="droneArt">
                            <img src={drone2} alt="drone2" />
                            <hr />
                            <div className="desc">Robotics and Artificial Intelligence</div>
                        </div>

                        <div className="droneArt">
                            <img src={drone3} alt="drone3" />
                            <hr />
                            <div className="desc">Improving Lives through Robotics Prosthetics</div>
                        </div>

                        <div className="droneArt">
                            <img src={drone4} alt="drone4" />
                            <hr />
                            <div className="desc">Power of Robotics in Agriculture</div>
                        </div>
                    </div>

                </div>


            </section >
        </>
    )
}

export default Articles;