import React from 'react';
import RetroButton from '../retroButton';
import About from '../about';
import Contact from '../contactForm';

const Home = () => (
  <>
    <section>
      <div className="introduction">
        <h3>Gretchen Ward</h3>
        <p className="label">Front End Developer</p>
        <RetroButton text="See What I've Been Working On" />
      </div>
    </section>
    <section className="dark-blue-background">
      <div className="about" name="about">
        <About />
      </div>
    </section>
    <section className="blue-background">
      <div className="contact-form" name="contact">
        <Contact />
      </div>
    </section>
  </>
)

export default Home;