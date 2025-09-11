import { useState } from 'react'

import MainScreen from './screen/MainScreen.jsx'
import HomeScreen from './screen/HomeScreen.jsx'
import AboutScreen from './screen/AboutScreen.jsx'
import ServiceScreen from './screen/ServiceScreen.jsx'
import NavBar from './components/NavBar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {

  return (
        <BrowserRouter>
            <NavBar />
            <div style={{ marginTop: '110px' }}>
                <Routes>
                    <Route path='/' element={<MainScreen />} />
                    <Route path='/home' element={<HomeScreen />} />
                    <Route path='/about' element={<AboutScreen />} />
                    <Route path='/service' element={<ServiceScreen />} />
                    
                    {/* Add more routes as needed */}
                    
                </Routes>

            </div>

        </BrowserRouter>
    )
}

export default App
