import React from 'react'

const ProjectDescription = (props) => (
  <div className={props.className}>
    <h4>{props.title}</h4>
    <p>{props.subtitle}</p>
    <p>{props.description}</p>
    {props.children}
  </div>
)

export default ProjectDescription
