import React from 'react'

const ProjectItem = (props) => (
  <div className="project">
    <img src={props.image} alt={props.alt} />
  </div>
)

export default ProjectItem
