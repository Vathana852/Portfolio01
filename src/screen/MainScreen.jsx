import React from 'react'
import'./style/MainScreenStyle.css'
import HomeScreen from './HomeScreen.jsx'
import AboutScreen from './AboutScreen.jsx'
import SverviceScreen from './ServiceScreen.jsx'
import ExperienceScreen from './ExperienceScreen.jsx'
import EducationScreen from './EducationScreen.jsx'
import Navbar from './Navbar.jsx'

const MainScreen = () => {
  return (
    <div className='mainScreenContainer'>
        <Navbar />
        <HomeScreen />
        <AboutScreen />
        <SverviceScreen />
        <ExperienceScreen />
        <EducationScreen />
    </div>
  )
}

export default MainScreen
