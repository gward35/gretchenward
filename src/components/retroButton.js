import React, { useState, useRef } from 'react';

const handleRetroBtn = (event, btnRef, setBtnClass) => {
    const leftOffset = btnRef.current.getBoundingClientRect().left;
    const btnWidth = btnRef.current.offsetWidth;
    const myPosX = event.pageX;
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

    setBtnClass(newClass);
}

const RetroButton = props => {
  const [btnClass, setBtnClass] = useState(null);
  const btnRef = useRef(null);
  return (
    <div role="button" ref={btnRef} className={`btn ${btnClass}`} onMouseMove={event => handleRetroBtn(event, btnRef, setBtnClass)} onMouseLeave={() => setBtnClass(null)}>
      <span className="btn-inner">
        <span className="content-wrapper">
          <span className="btn-content">
            <span className="btn-content-inner">{props.text}</span>
          </span>
        </span>
      </span>
    </div>
  )
}

export default RetroButton;