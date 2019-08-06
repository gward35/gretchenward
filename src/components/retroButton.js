import React from 'react';

const RetroButton = props => {
  return (
    <div className="wrapper">
      <div role="button" className="retro-btn">
        <div className="btn" onClick={() => props.handleRetroBtn()}>
          <span className="btn-inner">
            <span className="content-wrapper">
              <span className="btn-content">
                <span className="btn-content-inner" label="See What I've Been Working On"></span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RetroButton;