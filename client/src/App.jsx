import React,{useRef} from 'react';
import { AiOutlineMenuFold } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const cursor =useRef();
  const menu=useRef();
  const tl=useRef(null);
  const closeIcon =useRef();

  useGSAP(()=>{  
    tl.current=gsap.timeline();
    tl.current.from(menu.current,{
      x:390,
      duration:0.2,
    })
    tl.current.from(".h1",{
      x:100,
      opacity:0,
      stagger:0.1,
    })
    tl.current.from(closeIcon.current,{
      opacity:0,
    })
    tl.current.pause();

    gsap.from("h1 .left",{
      opacity:0,
      y:300,
      duration:2.5,
      delay:1,
      stagger:0.08,
      ease:"bounce.out",
      scrollTrigger:{
        trigger:"h1 .left",
        scroller:"body",
        toggleActions:"play none restart restart",
        scrub:2
      }
    })
    gsap.from("h1 .right",{
      opacity:0,
      y:300,
      duration:2.5,
      delay:1,
      stagger:-0.08,
      ease:"bounce.out",
      scrollTrigger:{
        trigger:"h1 .right",
        scroller:"body",
        toggleActions:"play none restart restart",
        scrub:2
      }
    })

    gsap.from("nav",{
      opacity:0,
      y:-100,
      duration:0.8,
      delay:1,
      ease: "power2.out",
      scrollTrigger:{
        trigger:".screen",
        scroller:"body",
        toggleActions:"play none none reverse",
        markers:true,
        start:"top center"
      }
    })

    gsap.to(".img-container",{
      scrollTrigger:{
        trigger:".img-container",
        scrub:true,
        pin:true,
      }
    })
    
    // document.addEventListener("mousemove",(event)=>{
    //   gsap.to(cursor.current,{
    //     x:event.clientX,
    //     y:event.clientY,
    //     ease:"bounce.out"
    //   })
    // })

  })

  return (
    <div className='bg-[#141611] text-white w-[100vw] h-[auto] overflow-x-hidden bg-cover bg-center'>
      {/* <div ref={cursor} className='h-[2em] w-[2em] rounded-3xl bg-white fixed z-30'></div> */}
      
      <nav className='p-[3em] pt-[1.5em] pb-[1.5em] w-[100vw] fixed flex justify-between z-40'>
        <h1 className='text-4xl font-bold cursor-pointer'>PoRtFoLiO</h1>
        <div className='h-[2em] z-50' onClick={()=>{
          tl.current.play();
        }}>< AiOutlineMenuFold className='h-[100%] w-[100%]' /></div>
      </nav>

      <div ref={menu} className='fixed w-[30%] h-[100%] bg-white/30 backdrop-blur-sm top-0 right-0 text-3xl p-[2em] z-50'>
        <div ref={closeIcon} className='fixed h-[1em] w-[1em] top-0 right-0 p-[1em] pr-[2em]' onClick={()=>{
          tl.current.reverse();
        }}><ImCancelCircle/></div>
        <h1 className='mb-[2em] h1'>Linkdin Profile</h1>
        <h1 className='mb-[2em] h1'>Resume</h1>
        <h1 className='mb-[2em] h1'>View Github</h1>
        <h1 className='mb-[2em] h1'>Projects</h1>
        <h1 className='mb-[2em] h1'>My Contact</h1>
      </div>

      <div className='h-[80vh] w-[100vw] bg-opacity-[2em] bg-[url("https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center flex items-center justify-center font-bold img-container overflow-hidden'>
        <h1 className='text-[10em] overflow-hidden'>
          <span className='left inline-block'>D</span>
          <span className='left inline-block'>E</span>
          <span className='left inline-block'>V</span>
          <span className='left inline-block'>E</span>
          <span className='left inline-block'>L</span>
          <span className='left inline-block'>O</span>
          <span className='right inline-block'>P</span>
          <span className='right inline-block'>M</span>
          <span className='right inline-block'>E</span>
          <span className='right inline-block'>N</span>
          <span className='right inline-block'>T</span>
        </h1>
      </div>

      <div className='w-[100vw] h-[200vh] '>
        <div className='bg-white h-[20px] w-[20px] screen'></div>
      </div>
    </div>
  )
}

export default App
