import React from 'react';

const BlockDescription = props => {
  return (
    <div className="description">
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default BlockDescription;
