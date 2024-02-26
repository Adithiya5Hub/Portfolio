import React from 'react'
import  "./MobileNav.css";
import { Link } from 'react-scroll';
const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
     <div className={`mobile-menu ${isOpen? "active":""}`}
      onClick={toggleMenu}
     >
        <div className='mobile-menu-container'>
            <img className='logo' src="https://cdn-icons-png.flaticon.com/128/11355/11355310.png" alt="" />
        
            <ul>
                <li>
                    <Link to='hero-container' smooth={true} className="menu-items">Home</Link>
                </li>
                <li>
                    <Link to='skills-container' smooth={true}  className="menu-items">Skills</Link>
                </li>
                <li>
                    <Link to='project-container' smooth={true} className="menu-items">Projects</Link>
                </li>
                <li>
                    <Link to='contact-container' smooth={true} className="menu-items">Contact Me</Link>
                </li>

                <button className='contact-btn' onClick={()=>{}}>
                    Hire Me
                </button>
            </ul>
        
        </div>

     </div>
    </>
  )
}

export default MobileNav