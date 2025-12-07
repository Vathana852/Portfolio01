import { useState,useEffect } from 'react'

import MainScreen from './screen/MainScreen.jsx'
import HomeScreen from './screen/HomeScreen.jsx'
import AboutScreen from './screen/AboutScreen.jsx'
import ServiceScreen from './screen/ServiceScreen.jsx'
import ExperienceScreen from './screen/ExperienceScreen.jsx'
import LatestProjects from './screen/LatestProjectsScreen.jsx'
import ContactSection from './screen/ContactSections.jsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
    return null;
}

function App() {

  return (
        <BrowserRouter>
            <ScrollToTop />
            {/* <NavBar /> */}
            <div style={{ marginTop: '80px' }}>
                <Routes>
                    <Route path='/' element={<MainScreen />} />
                    <Route path='/home' element={<HomeScreen />} />
                    <Route path='/about' element={<AboutScreen />} />
                    <Route path='/service' element={<ServiceScreen />} />
                    <Route path='/Experience' element={<ExperienceScreen />} />
                    <Route path='/LatestProject' element={<LatestProjects />} />
                    <Route path='/ContactSections' element={<ContactSection />} />

                    {/* Add more routes as needed */}
                    
                </Routes>

            </div>

        </BrowserRouter>
    )
}

export default App
