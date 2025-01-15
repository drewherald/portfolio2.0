import React from 'react'
import alias from '../assets/images/projects/alias.png'
import daisymarket from '../assets/images/projects/daisymarket.png'
import flockrank from '../assets/images/projects/flockrank.png'

export default function ProjectLineItem({project}) {

    let image = project.name

    switch(image){
        case "Flockrank.net":
            image = flockrank
            break
        
        case "Alias Media & Design":
            image = alias
            break

        case "Daisy Market":
            image = daisymarket
            break

        default:
            image = null
            break
    }

  return (
    <div className="projBox">
    <div>
        <h5>Featured Project</h5>
        <h2>{project.name}</h2>
        <p className="animate-via-scroll">
            {project.description}
        </p>
        <p className="animate-via-scroll">{project.techStack}</p>
        <a href={project.liveapp} className="animate-via-scroll" style={{marginRight: '10px' }}>Live App</a>
        {project.repo != null ?  <a href={project.repo} className="animate-via-scroll">Repository</a> :  <a href={project.repo} className="animate-via-scroll">Repository Unavailable</a>}
    </div>
    <img src={image} alt="" />
</div>
  )
}
