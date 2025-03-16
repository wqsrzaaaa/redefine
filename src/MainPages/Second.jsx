import gsap from 'gsap'
import React, { useEffect } from 'react'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Second = () => {

  useEffect(() => {
    gsap.fromTo("#scrollDown" , 
      {width : "40vh" , height : "50vh"},
      {width : "100%" , height : "100vh" , scrollTrigger : {
          trigger : "#parentScroll" , 
          start : "top top" , 
          end : "bottom bottom",
          scrub : true
      }}
    )
  }, [])
  

  return (
    <div className='w-full '> 
      <div className='w-full h-[80vh] text-center flex items-center justify-center flex-col'>
        <p>Welcome to Zentry</p>
        <h1 className='lg:text-8xl text-6xl  font-extrabold tracking-tighter'>Discover the world's <br/> largest shared adventure</h1>
      </div>
      <div id='parentScroll' className='w-full h-[300vh]  flex relative justify-center'>
        <div id='scrollDown' className='w-full  h-screen sticky lg:top-0 md:top-0 top-0'>
          <img className='h-full w-full object-cover' src="https://redefine-gaming.netlify.app/img/about.webp" alt="" />
        </div>
      </div>
     </div>
  )
}

export default Second