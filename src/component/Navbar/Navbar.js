import React, { useState } from "react";


const Navbar =() => {
 
  const {toggleMenu, setToggleMenu} =useState(true)
  const handleNavbar = () => {
     setToggleMenu(!toggleMenu)
  }
    return (
      <div className="bg-pink-600   flex justify-between">

        <div className=" bg-pink-500 p-5 m-5 rounded-md ">
           <h2 className="font-bold text-white">B O O K H U B</h2>
        </div>
        
        <div className="">
           
         { toggleMenu ?
           <div >
            <ul>
              <li>
                Home
              </li>
              <li>
                About
              </li>
            </ul>
           </div>
            :
           <button onClick={handleNavbar} className="m-7">
            <div className="bg-white p-1 w-10 rounded-md m-1"></div>
            <div className="bg-white p-1 w-5 rounded-md m-1"></div>
            <div className="bg-white p-1 w-10 rounded-md m-1"></div>       
          </button>
          }
        </div>


      </div>
    );
  }
  
  export default Navbar;