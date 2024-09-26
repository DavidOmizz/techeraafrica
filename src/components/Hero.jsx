import React from 'react'

function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between flex-wrap container mx-auto px-6 md:px-16 lg:px-28 py-16 md:py-32 bg-blue-600 w-full mt-20 md:mt-0">
  
  {/* Text Div */}
  <div className="w-full md:w-[60%] mb-8 md:mb-0 mt-11 md:mt-0">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-4 text-white">
      Discovering,<br /> Developing and <br /> <span className='text-white'>Deploying Tech Dreams</span>
    </h1>
    <p className="mb-6 text-white font-sans text-sm md:text-base lg:text-lg">
      Welcome to Techera, home of Tech Dreams. This is our E-learning portal for Tech Enthusiasts. Apply below to register your interest in any of our courses.
    </p>
    <div className="flex space-x-4">
      <button className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-2 rounded hover:bg-blue-600 transition duration-300">
        Join Now
      </button>
      <button className="bg-gray-300 text-black px-4 py-2 md:px-6 md:py-2 rounded hover:bg-gray-400 transition duration-300">
        Contact Us
      </button>
    </div>
  </div>

  {/* Image Div */}
  <div className="w-full md:w-[35%] flex justify-center">
    <img 
      src={require('../images/illustration-hero.png')} 
      alt="Someone coding" 
      className="w-full h-auto md:w-fit object-contain" 
    />
  </div>
</div>

  )
}

export default Hero