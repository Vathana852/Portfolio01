import React from 'react'
import'./style/MainScreenStyle.css'
import HomeScreen from './HomeScreen.jsx'
import AboutScreen from './AboutScreen.jsx'
import SverviceScreen from './ServiceScreen.jsx'
import { BrowserRouter } from 'react-router-dom'

const MainScreen = () => {
  return (
    <div>
        <HomeScreen />
        <AboutScreen />
        <SverviceScreen />
    </div>
  )
}

export default MainScreen
