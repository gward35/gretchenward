import React from 'react';

const RetroButton = props => {
  return (
    <div role="button" className="btn" onMouseMove={() => props.handleRetroBtn()}>
      <span className="btn-inner">
        <span className="content-wrapper">
          <span className="btn-content">
            <span className="btn-content-inner" label="See What I've Been Working On"></span>
          </span>
        </span>
      </span>
    </div>
  )
}

export default RetroButton;