import React, { useRef } from 'react'
import './Project.css'
import ProjectCard from './ProjectCard/ProjectCard'
import { PROJECTS } from '../../utils/data'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Project = () => {
    const sliderRef = useRef();
    const settings={
        dots: false,
        infinite: true,
        speed: 500,
        slideToShow: 2,
        slideToScroll: 1,
        
        responsive: [
            {
                breakpoint: 700,
                settings:{
                    slideToShow: 1,
                    slideToScroll: 1,
                },
            },
        ],
    };
  return (
    <section className="project-container">
        <h5>Projects</h5>
        <div className="project-content">
            <Slider {...settings}>
            
                {PROJECTS.map((item)=>(
                    <ProjectCard key={item.title} details ={item} />
                ))}
            </Slider>    
            
        </div>
    </section>
  )
}

export default Project