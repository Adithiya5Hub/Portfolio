import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from 'react-scroll'
import MobileNav from './MobileNav/MobileNav';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu=()=>{
        setOpenMenu(!openMenu)
    }
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
     <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src =" https://cdn-icons-png.flaticon.com/128/11355/11355310.png" />

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

               <a href="/Adithiya_Resume1.pdf" target="_blank" className='resume'>
                <button className='contact-btn' onClick={()=>{}}>
                    Hire Me
                </button>
                
               </a> 
            </ul>

            <button className='menu-btn' onClick={toggleMenu}>
                <span
                class={"material-symbols-outlined"}
                style={{fontSize: "0.8rem",
               
                }}
                >
                    {openMenu?<img src='https://cdn-icons-png.flaticon.com/128/5968/5968958.png' height={"30.8rem"}/>:<img src="https://cdn-icons-png.flaticon.com/128/10333/10333214.png" height={"30.8rem"} alt="" />
}
                </span>
            </button>
        </div>
     </nav>
    
    </>
  )
}

export default Navbar