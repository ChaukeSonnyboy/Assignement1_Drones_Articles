import drone5 from './images/about.png'

function About() {
    return (
        <>

            <section className="about" id='aboutus'>

                <div className="abtImage">
                    <img src={drone5} alt="drone1" />
                </div>

                <div className='contentHolder'>
                    <div className="abtContent">

                        <div id="abtHeader">
                            <p>ABOUT US</p>
                            <hr />
                        </div>

                        <div className='droneArticle'>
                            <p>Welcome to our dronotics, where innovation and technology converge to shape the future. We revolutionize and improve lives worldwide through our passion for pushing the boundaries of what robots can do. With expertise in AI, computer vision, mechanical engineering, and automation, we lead the way in the robotics revolution. Our brilliant team creates intelligent machines that seamlessly integrate into daily life, enhancing productivity , safety, and efficiency. Join us on this exciting challenges, and shape a future where intelligent machones work hand-in-hand with humans. Discover the power of robotics and be part of the revolution. </p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;