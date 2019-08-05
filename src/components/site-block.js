import React from 'react';
import Button from './button';

const SiteBlock = props => {
  return (
    <div className="site-block">
      {props.children}
      <Button text="View Site"/>
    </div>
  )
}

export default SiteBlock;
