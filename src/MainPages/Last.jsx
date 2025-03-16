import React, { useRef } from 'react'

const Last = () => {

  const ref = useRef(null)

  const mousemove = (e)=>{
    if (ref.current) {
      let rotateX = -((e.clientY - window.innerHeight / 2) / 25 )
      let rotateY =(e.clientX - window.innerWidth / 2) / 25

      ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  }

  const btnref = useRef(null)
  const btnmouse = (e) => {
    if (btnref.current) {
      let x = e.clientX - e.target.getBoundingClientRect().left;

      btnref.current.style.transform = `translate(${x}px)`;
    }
  };


  return (
    <div className='w-full h-[120vh]  md:h-[150vh] bg-black text-white relative'>
    <div id='div' onMouseMove={mousemove} className='w-full h-[50vh] flex-col  text-center gap-3 flex z-3 items-center justify-center relative'> 
      <p className='text-zinc-600'>the multiversal ip world</p>
      <h1 className='lg:text-8xl text-6xl  font-extrabold '> THE STORY OF A <br/> HIDDEN REALM</h1>
      <img id='img' ref={ref} className='w-[60%] h-[50vh]  md:h-[70vh] object-cover absolute left-1/2 -z-2 -translate-x-1/2 top-[80%] rounded-2xl ' src="https://redefine-gaming.netlify.app/img/entrance.webp" alt="" />
    </div>

    <footer className='w-full h-[70vh] text-center absolute bg-black -bottom-80 flex flex-col gap-5 items-center justify-center '>
      <h1 className='w-[70%] lg:text-8xl md:text-7xl text-5xl  font-extrabold'>let's build the new era of gaming together</h1>
      <button onMouseMove={btnmouse} 
      className='!p-4 md:w-[50vh] md:h-[70px] w-[35vh]  border-1 border-zinc-600 text-white  rounded-full z-6  overflow-hidden relative'>
        <span className='relative -z-2'>Contact us </span>
        <div ref={btnref} className='absolute w-[50px] h-[50px] bg-blue-700  btn-div'></div>
        </button>
    </footer>
  </div>
  )
}

export default Last