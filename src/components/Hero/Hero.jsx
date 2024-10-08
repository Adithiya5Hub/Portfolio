import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <section className='hero-container'>
        
        <div className="hero-img">
            <div>
                
                <img className="my-img"  src="/Adithiya.jpg"  alt="" />
            </div>

            <div>
                <div className="tech-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/10826/10826338.png" alt="" />
                </div>
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
        <div className='hero-content'>
            <h2>Transforming Ideas Into Creative <span class='gradient'>Websites</span></h2>
            <p>Passionate Frontend Web Developer | Helping to build high quality websites and exceptional user experience</p>
        </div>

    </section>
  )
}

export default Hero
