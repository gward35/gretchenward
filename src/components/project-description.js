import React from 'react';
import RetroButton from './retroButton';

const ProjectDescription = props => (
  <div className={props.className}>
    <h2>{props.title}</h2>
    <h3>{props.subtitle}</h3>
    <p>{props.description}</p>
    <RetroButton text="View Site"/>
  </div>
)


export default ProjectDescription;
