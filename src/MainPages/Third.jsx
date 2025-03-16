import React, { useEffect, useRef } from 'react'
import Card from '../assets/feature-1.mp4'
const Third = () => {

  const comingref = useRef(null)
  const comingref2 = useRef(null)
  const comingref3 = useRef(null)
  const comingref4 = useRef(null)

  useEffect(() => {
    const mousemove = (e)=>{
      let rotateX = (e.clientY - window.innerHeight / 2) / 40
      let rotateY = -((e.clientX - window.innerWidth / 2) / 40);
      comingref.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
      comingref2.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
      comingref3.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
      comingref4.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
    }
  window.addEventListener('mousemove' , mousemove)

  }, [])
  
  const Cursor = useRef(null)
  const CursorMove = (e)=>{
    Cursor.current.style.top = e.clientY + 'px'
    Cursor.current.style.left = e.clientX + 'px'
    Cursor.current.style.scale = 1
  
  }
  const CursorLeav = ()=>{
    Cursor.current.style.scale = 0
  }
  return (
    <div  className='w-full cursor-none !pb-50 text-white flex flex-col items-center bg-black relative'>
      <div onMouseMove={CursorMove} onMouseLeave={CursorLeav}  className='w-full h-screen sticky top-0 left-0 z-99'>
         <div ref={Cursor} id='my-cursor' className='w-[50px]  h-[50px] bg-blue-800 rounded-full scale-0 absolute '></div>
      </div>
    <div className='w-full h-[50vh] lg:!-mt-[90vh] !-mt-[100vh]  flex-col flex justify-center gap-3 md:!pl-15 !pl-5  lg:!pl-45'>
     <h1 className='text-2xl font-bold'> Into the Metagame Layer</h1>
     <p className='md:w-[70vh] w-[40vh]  text-gray-500'>Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.</p>
    </div>
    <div className='w-[85%] !p-5 relative h-[35vh] md:h-[50vh] lg:h-[60vh] overflow-hidden z-3 border-1'>
     <video autoPlay muted loop className='w-full h-full scale-170 -z-1  absolute left-0 top-0 ' src={Card}></video>
     <h1 className='text-5xl !pb-3 font-bold'>Radient</h1>
     <p className='md:w-[50vh] w-[35vh] text-white  md:text-gray-600'>A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.</p>
    </div>
    <div ref={comingref4} className='w-full flex gap-9 justify-center flex-wrap !m-9 !p-4'>
      <div className='w-[45vh] md:w-[65vh] lg:w-[35%]  z-3  h-[80vh] relative border-1'>
       <video autoPlay muted loop className='w-full -z-1  absolute top-0 left-0 h-full object-cover' src="https://redefine-gaming.netlify.app/videos/feature-2.mp4"></video>
       <div className='w-[40vh] !p-5'>
         <h1 className='text-3xl font-bold'>Zigma</h1>
         <p>An anime and gaming-inspired NFT collection - the IP primed for expansion.</p>
       </div>
      </div>
      <div ref={comingref3} className='w-[50vh] md:w-[65vh] lg:w-1/2  h-[80vh] relative flex flex-col gap-3'>
       <div className='w-full relative h-[40vh] border-1 z-3'>
         <video className='w-full h-full absolute left-0 top-0 -z-1 object-cover' autoPlay loop muted src="https://redefine-gaming.netlify.app/videos/feature-4.mp4"></video>
          <div className='w-[40vh] flexflex-col gap-4 !p-5'>
           <h1 className='text-3xl font-bold'>NEXUS</h1>
           <p>A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.</p>
          </div>
       </div>
       <div ref={comingref2} className='w-full relative h-[40vh] border-1 z-3'>
         <video className='w-full h-full absolute top-0 left-0 -z-1 object-cover' loop autoPlay muted src="https://redefine-gaming.netlify.app/videos/feature-3.mp4"></video>
         <div className="w-[40vh] !p-5">
           <h1 className='text-3xl font-bold'>AZUL</h1>
           <p>A cross-world AI Agent - elevating your gameplay to be more fun and productive.</p>
         </div>
       </div>
      </div>
    </div>

    <div ref={comingref} id='more-soon' className='w-[90%] md:w-[85%]  relative  flex items-center justify-center h-[30vh]  lg:h-[50vh] border-2' >
     <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold  text-black'>More Coming Soon</h1>
    </div>
  </div>
  )
}

export default Third