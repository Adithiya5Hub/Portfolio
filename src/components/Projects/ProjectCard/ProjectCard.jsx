import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({details}) => {
  return (
    <div className="project-card">
        <h6>{details.title}</h6>
       <a href={details.link}><img className="project-img"src={details.image}  /></a> 
        <br /><br />
        <ul>
            
            {details.description.map((item)=>(
               
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ProjectCard