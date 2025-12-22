import React from 'react'
import'./style/MainScreenStyle.css'
import HomeScreen from './HomeScreen.jsx'
import AboutScreen from './AboutScreen.jsx'
import SverviceScreen from './ServiceScreen.jsx'
import ExperienceScreen from './ExperienceScreen.jsx'
import EducationScreen from './EducationScreen.jsx'
import RecentProjects from './RecentProjects.jsx'
import LatestProjects from './LatestProjectsScreen.jsx'
import ContactSection from './ContactSections.jsx'
import Footer from './footer.jsx'
import Navbar from './Navbar.jsx'

import FloatingChat from '../components/FloatingChat.jsx'

const MainScreen = () => {
  return (
    <div className='mainScreenContainer'>
        <Navbar />
        <HomeScreen />
        <AboutScreen />
        <SverviceScreen />
        <ExperienceScreen />
        <EducationScreen />
        <RecentProjects />
        {/* <LatestProjects /> */}
        <ContactSection />
        <Footer />
        <FloatingChat />
    </div>
  )
}

export default MainScreen
