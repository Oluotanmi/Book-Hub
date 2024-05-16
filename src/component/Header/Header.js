import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";


const Header =() => {

    return (
      <div>
       
           <Navbar />
             <div className="bg-cover bg-center min-[320px]:text-center h-80 text-white" style={{ backgroundImage: 'url("./istockphoto-1694509340-612x612.jpg")'}}>
              <div className="sm:py-10">
                <h2 className="font-extrabold sm:text-4xl text-pink-800 ">Find the book of your choice</h2>     
                <p className="text-sm m-5 font-bold">Take your journey by searching your favourite books of your choice</p>
                <SearchForm />
              </div>
             </div>
              
      </div>
    );
  }
  
  export default Header;