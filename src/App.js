import React, {useRef} from 'react';
import Nav from './components/nav';
import RetroButton from './components/retroButton';
import About from './components/about';
import Contact from './components/contactForm';
import './css/style.css';

const App = () => {
  const button = useRef(null);
  return (
    <div className="App">
      <Nav />
      <main>
        <section>
          <div className="introduction">
            <h3>Gretchen Ward</h3>
            <p className="label">Front End Developer</p>
            {/* <Button text="See What I've Been Working On" /> */}
            <RetroButton text="See What I've Been Working On" />
          </div>
        </section>
        <section className="dark-blue-section">
          <div className="about" name="about">
            <About />
          </div>
        </section>
        <section className="blue-section">
          <div className="contact-form" name="contact">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App;
