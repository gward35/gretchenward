import React from 'react'
import RetroButton from '../retroButton'
import About from '../about'
import Contact from '../contactForm'

const Home = () => (
  <>
    <section>
      <div className="introduction">
        <h1>Gretchen Ward</h1>
        <p>Front End Developer</p>
        <RetroButton link="/web" text="See What I've Been Working On" />
      </div>
    </section>
    <section className="black-background">
      <div className="about" id="about">
        <About />
      </div>
    </section>
    <section className="off-white-background">
      <div className="contact-form" id="contact">
        <Contact />
      </div>
    </section>
  </>
)

export default Home
