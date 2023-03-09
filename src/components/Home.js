import React from 'react'
import vg from '../assets/phoenix.webp'
import Header from './Header'
import Footer from "./Footer"

const Home = () => {
    return (

        <>
            <Header></Header>
            <div className='Home' id='home'>
                <main>
                    <h1>
                        PHOENIX
                    </h1>
                    <p>
                        The Data Security Platform
                    </p>
                </main>
            </div>
            <div className="Home1">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        Discover, protect and control your organization’s sensitive at-rest or in-transit data anywhere
                        with next-generation unified data protection.
                    </p>
                </div>
            </div>
            <div className="Home2" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="Home3" id='services'>
                <div>
                    <h1>Our Services</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="contact" id='contact'>
                <main>
                    <h1>Contact Us</h1>
                    <form>
                        <div>
                            {/* <label>Name</label> */}
                            <input type="text" required placeholder='Name' />
                        </div>
                        <div>
                            {/* <label>Contact Number</label> */}
                            <input type="text" required placeholder='Contact Number' />
                        </div>
                        <div>
                            {/* <label>Email</label> */}
                            <input type="email" required placeholder='Email Address' />
                        </div>
                        <div>
                            {/* <label>Message</label> */}
                            <input type="text" required placeholder='Write Your Query Here' />
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                </main>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home