import React from 'react'
import './style/ExperienceSytle.css'
import Timeline from '../components/Timeline'

function ExperienceScreen() {
  return (
    <div className='experienceContainer' id='experience'>
      <h2 className='experience-subtitle'>My Special <span>Experience</span></h2>
      <h1 className='experience-title'>For your <span>Business Development</span> </h1>
      <Timeline />
    </div>

      
  )
}

export default ExperienceScreen;
