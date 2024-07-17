import drone1 from './images/surveillance.png'
import drone2 from './images/robotics.png'
import drone3 from './images/prosthetics.png'
import drone4 from './images/agriculture.png'

function Articles() {
    return (
        <>

            <section className="articles" id='dronesArtcles'>

                <div className="artContainer">

                    <div id="artHeader">
                        <p>LATEST ARTICLES</p>
                        <hr />
                    </div>
                    <div className="latestArticles">

                        <div className="droneArt">
                            <img src={drone1} alt="drone1" />
                            <hr />
                            <div className="desc">How to automate surveillance drones</div>
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