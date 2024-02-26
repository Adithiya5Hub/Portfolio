import React from 'react'
import './ContactMe.css'
import ContactInfo from './ContactInfo/ContactInfo'

const ContactMe = () => {
  return (
   <section className="contact-container">
    <h5>Contact Me</h5>
    <div className="contact-content">
        <div style={{display: "flex"}}>
           <a href="https://github.com/Adithiya5Hub" style={{padding: "50px"}}> 
              <ContactInfo 
                    iconUrl = 'https://cdn-icons-png.flaticon.com/128/2504/2504911.png'
                    
                    
                />
            </a> 
           <a href="https://www.linkedin.com/in/s-adithiya-9a252023a/" style={{padding: "50px"}}> 
              <ContactInfo 
                    iconUrl = 'https://cdn-icons-png.flaticon.com/128/15047/15047553.png'
                    
                    
                />
            </a> 
           <a href="https://twitter.com/Adithiya1S?t=w37s0kAs5B0NuV41p6khjw&s=08" style={{padding: "50px"}}> 
              <ContactInfo 
                    iconUrl = 'https://cdn-icons-png.flaticon.com/128/5969/5969020.png'
                    
                    
                />
            </a> 
           
            
        </div>
        
    </div>
   </section>
  )
}

export default ContactMe