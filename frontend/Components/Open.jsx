import gsap from 'gsap'
import React, { useState } from 'react'

function Open({opened, setOpen}) {
   
    const handleClick = () => {
        setTimeout(() => {
          setOpen(true)
        },500)
        console.log("HelloWorld")
        gsap.fromTo(
          ".left-div",
          { x: "0" },
          { x: "-150%", duration: 2, ease: "power4.out" }
        )
        gsap.fromTo(
          ".right-div",
          { x: 0 },
          { x: "150%", duration: 2, ease: "power4.out", delay: 0.2 }
        )
    
        gsap.fromTo(
          ".circle",
          { opacity: 1, scale: 1 },
          { opacity: 0, scale: 0, duration: 0.5, delay: 0.2 }
        )
      }
    return (
        <div>
            <div className="h-[100vh] flex  justify-center z-10 items-center relative">
                <div className="absolute flex">
                    <div className="left-div flex w-[45vw] h-[90vh] z-0 bg-[#ddcdcd] rounded-tl-2xl rounded-bl-2xl "></div>
                    <div className=" right-div flex w-[45vw] h-[90vh] z-0  bg-[#e1d9d4]  rounded-tr-2xl rounded-br-2xl "></div>
                </div>

                <div onClick={handleClick} className="circle absolute w-24 h-24 text-white bg-gray-700 rounded-full">
                    <p className="z-40 absolute top-[25%] left-[15%] font-bold text-2xl cursor-pointer">OPEN</p>
                </div>


            </div>
        </div>
    )
}

export default Open