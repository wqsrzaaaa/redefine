import React, { useRef, useState } from 'react'
import hero from '../assets/hero-2.mp4'
const First = () => {

  const ref = useRef(null)
  const Cursorref = (e)=>{

    const x = e.clientX - 100
    const y = e.clientY - 100

    ref.current.style.left = x + 'px'
    ref.current.style.top =  y + 'px'
    ref.current.style.scale = '1'
  }

  const cursorLeav = ()=>{
    ref.current.style.scale = 0
  }

  const [Video1, setVideo1] = useState(true)

  return (
    <div onMouseMove={Cursorref} onMouseLeave={cursorLeav}  className='w-full h-screen relative'>
      <div onClick={()=> setVideo1(Video1 === true ? false : true)} ref={ref} className='w-[300px] scale-0 h-[300px] overflow-hidden curosr-scale absolute top-0 rounded-full'>
        {!Video1 ?  <video
      className='w-full h-full rounded-full object-cover object-center'
      src={hero}></video>
        :
        <video className='w-full h-full object-cover object-center rounded-full' src="https://redefine-gaming.netlify.app/videos/hero-1.mp4"></video>
        }
      </div>
    {Video1 ? (
      <video 
      loop autoPlay muted={"Unmute"} 
      className='w-full h-full -z-1 absolute top-0 object-cover'
      src={hero}></video>
    )
  :
  <video 
  loop autoPlay muted 
  className='w-full h-full -z-1 absolute top-0 object-cover'
  src="https://redefine-gaming.netlify.app/videos/hero-1.mp4"></video>
  
  }
    <div className="md:w-full lg:!p-9 md:!p-9 !p-3  text-white gap-4  flex flex-col  ">
      <h1 className='lg:text-9xl md:text-7xl text-7xl  !pt-25 font-extrabold'>REDEFINE</h1>
      <p>Enter the Metagame Layer <br/>
      Unleash the Play Economy</p>
        <button id='button' className='w-[40vh] h-[50px]  text-black relative rounded-full overflow-hidden '><span className='span-tag absolute w-full h-full top-[30%] left-0'>Watch Trailer</span></button>
    </div>
    <div className="w-full !pt-9 md:!pt-0 lg:!pt-0  text-white ">
      <h1 className='lg:text-9xl md:text-7xl text-7xl  relative  lg:left-[60%] md:left-[60%] left-[25%] w-[100px] font-extrabold'>GAMING</h1>
    </div>
  </div>
  )
}

export default First