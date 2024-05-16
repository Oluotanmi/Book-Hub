import React, { useState } from "react";
import { HiArrowRight, HiX } from "react-icons/hi";


const Navbar =() => {

  const [toggleMenu, setToggleMenu]= useState(false)

   const toggleSideBar=()=>{
      setToggleMenu(!toggleMenu)
  } 
  
  
  
    return (
      <div className="bg-pink-600   flex justify-between">

        <div className=" bg-pink-500 p-5 m-5 rounded-md ">
           <h2 className="font-bold text-white">B O O K H U B</h2>
        </div>
        
        <div className="">
          { 
           toggleMenu ?
           <div className={`sidebar p-2 bg-white w-40  text-pink-500 font-bold rounded-lg inset-10 lg:hidden md:hidden transform ${toggleMenu? 'translate-x-0' : '-translate-x-full'}`}>
            <button>
              <HiX onClick={toggleSideBar}/>
            </button>
            <ul className="text-center">
              <li className="m-6 flex text-center">
                <HiArrowRight className="my-1" />
                Home
              </li>
              <li className="m-5 flex">
               <HiArrowRight className="my-1" />
                About
              </li>
            </ul>
           </div>
            :
           <button onClick={toggleSideBar}  className="m-7 lg:hidden">
            <div className="bg-white p-1 w-10 rounded-md m-1 "></div>
            <div className="bg-white p-1 w-5 rounded-md m-1"></div>
            <div className="bg-white p-1 w-10 rounded-md m-1"></div>       
          </button> 
        }
        </div>

        <div className=" text-white font-bold sm:hidden lg:block ">
          <ul className="flex p-6">
            <li className="p-2">
              Home
            </li>
            <li className="p-2">
               About
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Navbar;