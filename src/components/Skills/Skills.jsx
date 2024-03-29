import React, { useState } from 'react'
import "./Skills.css"
import SkillCard from './SkillCard/SkillCard'
import { SKILLS } from "../../utils/data";
import SkillInfoCard from './SkillInfoCard/SkillInfoCard';
const Skills = () => {
    const [selectedSkill,setSelectedSkill]=useState(SKILLS[0])
    const handleSelectedSkill = (data)=>{
        setSelectedSkill(data);
    }
  return (
    <section className='skills-container'>
        <h5>Technical Skills</h5>
        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item)=>(
                    <SkillCard 
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title===item.title}
                        onClick={()=>{
                            handleSelectedSkill(item);
                        }}
                    />
                ) )}
            </div>
            <div className="skills-info">
                <SkillInfoCard
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills