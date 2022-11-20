import React from 'react'
import RetroButton from '../components/retroButton'
import About from '../components/about'
import Contact from '../components/contactForm'

const Home = () => (
  <>
    <section>
      <div className="introduction">
        <h1>Gretchen Ward</h1>
        <p className="dev">Front End Engineer</p>
        <RetroButton link="/work" text="See What I've Been Working On" />
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
