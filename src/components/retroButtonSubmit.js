import React, { useState, useRef } from 'react'

const handleRetroBtn = ({ event, btnRef, setBtnClass }) => {
  const leftOffset = btnRef.current.getBoundingClientRect().left
  const btnWidth = btnRef.current.offsetWidth
  const myPosX = event.pageX

  // if on left 1/3 width of btn
  if (myPosX < leftOffset + 0.3 * btnWidth) {
    setBtnClass('btn-left')
  } else {
    // if on right 1/3 width of btn
    if (myPosX > leftOffset + 0.65 * btnWidth) {
      setBtnClass('btn-right')
    } else {
      setBtnClass('btn-center')
    }
  }
}

const RetroButtonSubmit = props => {
  const [btnClass, setBtnClass] = useState(null)
  const btnRef = useRef(null)
  return (
    <button
      ref={btnRef}
      type={props.type}
      className={`btn ${btnClass}`}
      onMouseMove={event => handleRetroBtn({ event, btnRef, setBtnClass })}
      onMouseLeave={() => setBtnClass(null)}
    >
      <span className="btn-inner">
        <span className="content-wrapper">
          <span className="btn-content">
            <span className="btn-content-inner">{props.text}</span>
          </span>
        </span>
      </span>
    </button>
  )
}

export default RetroButtonSubmit
