import React, { useEffect, useRef, useState } from "react";
import First from "./MainPages/First";
import Second from "./MainPages/Second";
import Third from "./MainPages/Third";
import Last from "./MainPages/Last";
import Lenis from "@studio-freight/lenis";
const App = () => {
  
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true, // Enable smooth scrolling
      duration: 1.5, // Increase duration for a smoother feel
      lerp: 0.08, // Lower value = smoother and slower response
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);
  

  const ref = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        ref.current.style.top = "0";
      } else {
        ref.current.style.top = "-100px"; 
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [Menu, setMenu] = useState(false)
  const [Radius, setRadius] = useState('50%')

  return (
    <>
      <div className="main w-full relative">
       {Menu && <div
       style={{borderRadius :Radius }}
       id="Menu-icon" className="w-[30vh]  h-full flex items-center flex-col fixed top-0 left-0 bg-zinc-900/50 backdrop-blur-lg z-[999]">
       <h1 className="w-full h-[100px] text-white text-4xl font-bold flex items-center justify-center">Menu</h1>
      <ol className="flex items-center justify-evenly h-[60%] text-white text-2xl flex-col list-decimal list-inside">
        <li>Nexus</li>
        <li>Vault</li>
        <li>Prologue</li>
        <li>About</li>
        <li>Contact</li>
      </ol>
      </div>}
        <header ref={ref} className="w-full text-white transition-all duration-300 justify-between  h-[100px] fixed top-0 z-99 flex">
          <div className="md:w-[50vh] w-[30vh]  !pl-6 flex items-center gap-3">
            <img 
             className="md:w-[60px] md:h-[60px] w-[30px] h-[30px]  object-center"
            src="https://redefine-gaming.netlify.app/img/logo.png" alt="" />
            <button className="md:w-[30vh] w-[20vh]  text-black !p-2 md:!p-3 bg-white rounded-3xl">Products</button>
          </div>
          <div 
          onClick={()=> (setMenu(Menu === true ? false : true)
          , setRadius(Radius === "50%" ? "0" : "50%")
            
        ) }
          className="text-3xl  flex items-center justify-center h-full !mr-4 lg:hidden ">☰ </div>
          <div className="w-[100vh] lg:flex hidden items-center justify-evenly">
            <p id="Header-p">Nexus</p>
            <p id="Header-p">Vault</p>
            <p id="Header-p">Prolouge</p>
            <p id="Header-p">About</p>
            <p id="Header-p">Contact</p>
          </div>
        </header>
        <First />
        <Second />
        <Third />
        <Last />
      </div>
    </>
  );
};

export default App;
