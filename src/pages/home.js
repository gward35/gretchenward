import React from 'react'
import RetroButton from '../components/retroButton'
import About from '../components/about'

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
  </>
)

export default Home
