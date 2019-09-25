import React from 'react';
import RetroButton from './retroButton';

const ProjectDescription = props => (
  <div className={props.className}>
    <h4>{props.title}</h4>
    <h5>{props.subtitle}</h5>
    <p>{props.description}</p>
    <RetroButton text="View Site"/>
  </div>
)


export default ProjectDescription;
