import React from 'react'
import 'animate.css';

const SplashScreen = () => {


   
  return (
    <div className='bg-[#0F5AFC] h-[100vh] w-[100vw] flex items-center justify-center'>
        <img loading="lazy" src="./images/Designer.png" className='h-[10vh] w-auto md:w-[5.5vw] rounded animate__animated animate__pulse' alt="logo" />
    </div>
  )
}

export default SplashScreen