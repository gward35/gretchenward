import React from 'react';
import Nav from './components/nav';
import RetroButton from './components/retroButton';
import './css/style.css';

const App = () => {

  const handleRetroBtn = () => {
    const button = document.querySelector('.btn');

    button.addEventListener("mousemove", (e) => {
      let leftOffset = button.getBoundingClientRect().left;
      let btnWidth = button.offsetWidth;
      let myPosX = e.pageX;
      let newClass = "";
      // if on left 1/3 width of btn
      if(myPosX < (leftOffset + .3 * btnWidth) ) {
        newClass = 'btn-left'
      } else {
        // if on right 1/3 width of btn
        if(myPosX > (leftOffset + .65 * btnWidth) ) {
          newClass = 'btn-right';
        } else {
          newClass = 'btn-center';
        }
      }
      // remove prev class
      let clearedClassList = button.className.replace(/btn-center|btn-right|btn-left/gi, "").trim();
      button.className = clearedClassList + " " + newClass;
    });

    // Hover
    button.addEventListener('mouseleave', () => {
      button.classList.remove('btn-center', 'btn-right', 'btn-left', 'btn-active');
    });
  }

  return (
    <div className="App">
      <Nav />
      <main>
        <div className="introduction">
          <h3>Gretchen Ward</h3>
          <p class="label">Front End Developer</p>
          {/* <Button text="See What I've Been Working On" /> */}
          <RetroButton handleRetroBtn={handleRetroBtn} />
        </div>
      </main>
    </div>
  )
}

export default App;
