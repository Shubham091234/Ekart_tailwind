import React from "react";

const Hero = () =>{
     return (
<>
<section className="text-gray-600  body-font bg-contain bg-no-repeat  ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 md:mr-20 mb-20">
      <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/season-sale_62951-24.jpg?w=740&t=st=1695296540~exp=1695297140~hmac=1cbc8d1916aae0fe3dc450c299546f5e5c5ee5a969adcca70194fb6c2ebc3a3d" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block" />readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    
  </div>
</section>
</>
     )
}

export default Hero;