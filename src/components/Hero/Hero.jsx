import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Transforming Ideas Into Creative Websites</h2>
            <p>Passionate Frontend Web Developer | Helping to build high quality websites and exceptional user experience</p>
        </div>
<div className="hero-img">
    <div>
        <div className="tech-icon">
            <img src="https://cdn-icons-png.flaticon.com/128/10826/10826338.png" alt="" />
        </div>
        <img  src="./src/assets/Adithiya.jpg"  alt="" />
    </div>

    <div>
        <div className="tech-icon">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="" />
        </div>
        <div className="tech-icon">
            <img src="https://cdn-icons-png.flaticon.com/128/6132/6132222.png" alt="" />
        </div>
        <div className="tech-icon">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2dqujIcaioTYIVGe16QAC_8klxgy9wH3xw&s" alt="" />
        </div>
    </div>

</div>

    </section>
  )
}

export default Hero