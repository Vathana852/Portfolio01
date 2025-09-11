import React from 'react'
import'./style/ServiceScreenStyle.css'
import worldMap from "../assets/WoldMap.png"



function ServiceScreen() {
  return (
    <div className='container'>
      <section className="w-full  autoShow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}

          <div className="serviceTitle text-center md:text-left ">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
                Connecting shoppers <br /> and brands worldwide
              </h2>
              <p className="mt-4 text-white text-base sm:text-lg leading-relaxed">
                We're in 53 countries across the globe, empowering our partners to
                enhance their customers' experiences, wherever they may be. Join us
                in our mission to create seamless experiences that keep shoppers
                coming back for more.
              </p>
              <button className="mt-6 px-6 py-3 rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-all">
                Discover our international network →
              </button>
            </div>



          {/* Right Section - World Map */}
          <div className="flex justify-center">
            <img
              src={worldMap}
              alt="World Map"
              className="w-full max-w-lg object-contain"
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default ServiceScreen
