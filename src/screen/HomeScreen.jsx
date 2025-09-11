import React from 'react'
import'./style/HomeScreenStyle.css'
import heroImage from '../assets/Hero_Profile.JPG'
import TypingLoop from '../components/TypingLoop'
import '../components/Animation.css'

// Icon
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";





const HomeScreen = () => {

  const imageTop = heroImage;
  return (
    
    <div className="container mx-auto px-4 py-8 autoShow" >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        
          <div className="leftBox flex flex-col justify-center ">
            <div className="text-section custom-box px-6">
              <h5 className="intro-text">I'am</h5>
              <h1 className="name">YON VATHANA</h1>
              <TypingLoop words={["Developer", "Designer", "Programmer"]} />
            </div>

            <div className="button-group mt-6 flex justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ypRRiahw69__XVunXIMPhkRc6LsCVzfn/view?usp=sharing",
                    "_blank"
                  )
                }
                className="btn-primary"
              >
                Download my CV
              </button>

              <button
                onClick={() => (window.location.href = "https://t.me/yonvathana")}
                className="btn-outline"
              >
                Contact Me
              </button>
            </div>

            <div className="social-icons mt-6 flex justify-center space-x-4">
              <a
                href="https://web.facebook.com/Yonvathana16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white"
              >
                <FaFacebookSquare />
              </a>

              <a
                href="https://www.instagram.com/vathana_yon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white"
              >
                <RiInstagramFill />
              </a>

              <a
                href="https://www.linkedin.com/in/vathana-yon-81a446248/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white"
              >
                <FaLinkedin />
              </a>


              {/* Add more social icons as needed */}
            </div>

          </div>


        {/* Right Section */}


        <div className="flex-1 custom-right">
            <img 
                 className='rounded-lg'
                 src={heroImage} alt="about hero" 
              />

                 
        </div>

      </div>


    </div>
    
  )
}

export default HomeScreen
